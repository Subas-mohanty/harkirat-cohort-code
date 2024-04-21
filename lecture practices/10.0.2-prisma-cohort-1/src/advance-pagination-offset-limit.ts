
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['info', 'query']
})

// to show only a limit of things , in sql the command is 
// SELECT * FROM question OFFSET 0 LIMIT 10;
// SELECT * FROM question OFFSET 10 LIMIT 10;
// SELECT * FROM question OFFSET 20 LIMIT-10;
// in prisma we can do like this
async function main() {
  let res = await prisma.post.findMany({
    take: 3,
    skip: 10 // this is the offset
  })
    console.log(res);
    
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })