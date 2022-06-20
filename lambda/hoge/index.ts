import { APIGatewayProxyEvent, APIGatewayEventRequestContext } from 'aws-lambda'

import * as mysql from 'mysql2/promise'

export const handler = async (
  event: APIGatewayProxyEvent,
  context: APIGatewayEventRequestContext,
) => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '', 10),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  })

  connection.connect()

  const [usersRows] = await connection.query('SELECT * from users')
  const users = JSON.parse(JSON.stringify(usersRows))

  console.log(users)

  return {
    status: 200,
    headers: event.headers,
    body: {
      name: 'hoge',
    },
  }
}
