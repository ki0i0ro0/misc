// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

export default function test(req: NextApiRequest, res: NextApiResponse) {
  const page = Number(req.query.page) //クエリパラメータの取得
  let result = []
  if (page < 10) {
    //0～99を返す
    const array = Array(100)
    result = [...(array as any).keys()].map((i) => i + page * 100)
  }

  //処理成功
  res.statusCode = 200
  res.json(result)
}
