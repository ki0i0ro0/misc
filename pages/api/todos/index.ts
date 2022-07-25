import type { NextApiRequest, NextApiResponse } from 'next'
import sqlite3 from 'sqlite3'

const selectAll = (db: sqlite3.Database, query: string) => {
  return new Promise((resolve, reject) => {
    db.all(query, (err: Error, rows: any[]) => {
      if (err) return reject(err)
      return resolve(rows)
    })
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = new sqlite3.Database('./database.sqlite')
  const users = await selectAll(db, 'select * from todos')
  db.close()

  res.status(200).json({ users })
}
