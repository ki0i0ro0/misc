import type { NextApiRequest, NextApiResponse } from 'next'
import sqlite3 from 'sqlite3'

export const selectAll = (db: sqlite3.Database, query: string) => {
  return new Promise((resolve, reject) => {
    db.all(query, (err: Error, rows: any[]) => {
      if (err) return reject(err)
      return resolve(rows)
    })
  })
}

export const save = (db: sqlite3.Database, query: string, values: any[]) => {
  return new Promise((resolve, reject) => {
    try {
      db.run(query, ...values)
      return resolve('OK')
    } catch (err) {
      return reject(err)
    }
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET': {
      const db = new sqlite3.Database('./database.sqlite')
      const todos = await selectAll(db, 'select * from todos')
      db.close()
      res.status(200).json({ todos })
      break
    }
    case 'POST': {
      const { body } = req
      const db = new sqlite3.Database('./database.sqlite')
      await save(db, `INSERT INTO todos(title,date) VALUES (?,?)`, [
        body.title,
        new Date().toLocaleDateString(),
      ])
      db.close()
      res.status(200).send('OK')

      break
    }
    default:
      res.status(400).json({ message: 'Bad Request' })
      break
  }
}
