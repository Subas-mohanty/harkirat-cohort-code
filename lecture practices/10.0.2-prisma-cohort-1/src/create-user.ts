import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  // creating a user table with this data.
  // in raw postgres query , we were doing like this 
  // pg.query('INSERT INTO users (email, password) VALUES ("abc@xyz.com", "12345678") RETURNING id';)
  // but here we pass the method and the data like this
  await prisma.user.create({
    data:{
      email : "abc@xyz.com",
      name : "subas"
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