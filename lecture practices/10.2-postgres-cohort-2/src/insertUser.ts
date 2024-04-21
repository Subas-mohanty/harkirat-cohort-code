import { prisma } from "."

async function insertUser(userName : string, firstName: string, lastName: string, password: string){
  const res = await prisma.user.create({
    data : {
      email : userName,
      firstName,
      lastName, // we can give this or chose to not pass this here
      password // we have to provide the fields which are needed
    }
  })
  console.log(res)
}

insertUser("subas@gmail.com", "subas", "mohanty", "password")