import { Book, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // call functions by method
  const funcMap = {
    GET: handleRead,
    POST: handleCreate,
  };

  const func = funcMap[req.method];
  if (!func) {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  return func(req, res)
    .catch((e) => {
      res.status(400).end("prisma client throws an exception.");
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};

/**
 * READ
 * @param req
 * @param res
 */
const handleRead = async (
  req: NextApiRequest,
  res: NextApiResponse<Book[]>
) => {
  // prisma - READ
  const book = await prisma.book.findMany({
    orderBy: {
      id: "asc",
    },
  });
  res.json(book);
};

/**
 * CREATE
 * @param req
 * @param res
 */
const handleCreate = async (
  req: NextApiRequest,
  res: NextApiResponse<Book>
) => {
  const { name } = req.body;

  // validation check

  // `name` duplicate check

  // prisma - CREATE
  const book = await prisma.book.create({
    data: { name },
  });
  res.json(book);
};
