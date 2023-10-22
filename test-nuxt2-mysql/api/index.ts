import express from 'express' // expressを利用することを定義
import { createConnection } from 'mysql'

const app: express.Express = express()

const connection = createConnection({
  // 以下、各自のMySQLへの接続情報を書く
  host: 'localhost',
  user: 'docker',
  password: 'docker',
  database: 'test_database',
})

app.get('/', function (_req: express.Request, res: express.Response) {
  res.set({ 'Access-Control-Allow-Origin': '*' }) // この記載により、※1：CORSを許可する
  connection.query('select * from test_table', function (error, results) {
    // scrapingsテーブルから全てのカラムを取得する
    if (error) throw error // エラー処理
    res.send(results[0]) // results[0]により、一番目のデータを返答する
  })
})

app.listen(5000, function () {
  // port 5000をlistenする
  console.log('Example app listening on port 5000!') // console.logによりファイル実行時にコンソールに文字表示させる
})
