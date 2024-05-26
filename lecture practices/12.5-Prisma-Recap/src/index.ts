import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email : string, userName : string, firstName : string, lastName : string) {
  const newUser = await prisma.user.create({
    data :{
      userName,
      email,
      firstName,
      lastName
    }
  })
}

// insertUser("ladld@lkwee", "subadfdu", "sklfasddf", "slkfadfd");

// we can do this to get todos as well as the associated users with the todo, but here we are making two database call which is not so good, so in this type of case we will use relationship or join syntax
async function getTodos(uesrId : number){
  const response = await prisma.todos.findMany({
    where : {
      user_id : uesrId
    }
  })
  const user = await prisma.user.findMany({
    where : {
      id : uesrId
    }
  })
  console.log(response);
}
async function addTodo(title : string, description : string, id : number){
  const response = await prisma.todos.create({
    data : {
      title,
      description,
      user_id : id
    }
  })
}
// addTodo("be rich", "earn a lot of money", 3)


async function getTodoWithUser(userId : number){
  const response = await prisma.todos.findMany({
    where : {
      user_id : userId
    },
    select : {
      id : true,
      title : true,
      description : true,
      user : true
    }
  })
  console.log(response)
}

getTodoWithUser(3);