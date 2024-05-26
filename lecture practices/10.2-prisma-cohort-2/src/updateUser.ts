import {prisma} from '.'

interface UserData{
  firstName : string,
  lastName : string,
}

async function updateUser2(userName: string, {
  firstName,
  lastName
}: UserData){

  const res = await prisma.user.update({
    where:{
      email : userName
    },
    data : {
      firstName : firstName,
      lastName : lastName
    }
  })
  console.log(res);
}

async function updateUser(userName: string, firstName : string, lastName : string){
  const res = await prisma.user.update({
    where:{
      email : userName
    },
    data : {
      firstName : firstName,
      lastName : lastName
    }
  })
  console.log(res);
}

updateUser2("subas@gmail.com",{firstName : "subas", lastName : "mohanty"})

