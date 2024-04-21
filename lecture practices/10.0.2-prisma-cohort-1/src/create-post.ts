import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.post.create({
    data:{
      title : "course",
      content : "full stack course",

      // this is the reference to the user with user id 1
      // we can also do like this
      // authorId : 1
      author :{
        connect:{
          id:1
        }
      }
    }
  })
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