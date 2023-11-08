import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  setInterval(async () => {
    const users = await get();
    const num = Number(users[0].posts[0].content ?? 0) + 1;
    await update(num);
  }, 1500);
}

async function get() {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
  return allUsers;
}

async function update(num: number) {
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { content: num.toString() },
  });
  console.log(post);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
