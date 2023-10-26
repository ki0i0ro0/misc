import type { NextApiRequest, NextApiResponse } from 'next'
import sqlite3 from 'sqlite3'
import { save, selectAll } from './index'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req

  switch (method) {
    case 'GET': {
      const db = new sqlite3.Database('./database.sqlite')
      const todos = (await selectAll(db, 'select * from todos')) as any[]
      db.close()
      const todo = todos.find((v) => v.id == query.id)
      res.status(200).json({ todo })
      break
    }
    case 'PUT': {
      const { body } = req
      const db = new sqlite3.Database('./database.sqlite')
      await save(db, `update todos set title = ? where id = ?`, [body.title, query.id])
      db.close()
      res.status(201).send('Updated')
      break
    }
    case 'DELETE': {
      const db = new sqlite3.Database('./database.sqlite')
      await save(db, `delete from todos where id = ?`, [query.id])
      db.close()
      res.status(201).send('Deleted')
      break
    }
    default:
      res.status(400).json({ message: 'Bad Request' })
      break
  }
}
