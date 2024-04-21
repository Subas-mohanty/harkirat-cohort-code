import { PrismaClient } from '@prisma/client'
import { log } from 'console'

const prisma = new PrismaClient()

async function main() {
  // const users = await prisma.user.findMany({})
  // console.log(users);

  const filterdUsers = await prisma.user.findUnique({
    where:{
      id: 1
    }, 
    // this will join the post table with the user data
    include :{
      posts: true
    }
  })
  console.log(filterdUsers);
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })