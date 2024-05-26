import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import {sign, verify} from 'hono/jwt'
import { withAccelerate } from '@prisma/extension-accelerate';
import { userSchema, userSignInSchema } from "../zod";

export const userRouter = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET : string 
  }
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    // datasourceUrl: env.DATABASE_URL, we can't directly use like this, any environment variable we want to use we have to use the c or the context , and remember all the environment variable are present in wrangler.toml file
    // @ts-ignore // this notation ignore the typescript error on the next line
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())

  // console.log("hello buddy");
  
  const body = await c.req.json();
  const {success} = userSchema.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      msg : "Invalid inputs"
    })
  }
  try {
    const user = await prisma.user.create({
      data:{
        email : body.email,
        password : body.password
      }
    })
    const secret = c.env.JWT_SECRET;
    const token = await sign( {id : user.id}, secret) // here we are not storing email and password in the jwt, we are storing the id of the user which is created, remember in the user table we have id as primary key, that id is being used here

    return c.json({token : token})

  } catch (error) {
    // we can't directly do this in hono like express
    // c.status(403).text("anything")

    c.status(403);
    return c.json("Error while signing up")
  }
})

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const {success} = userSignInSchema.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      msg : "Invalid inputs"
    })
  }
  const user = await prisma.user.findUnique({
    where : {
      email : body.email,
      password : body.password
    }
  })
  if(!user){
    c.status(404)
    return c.json({error : "User not found"})
  }
  const jwt = await sign({id : user.id}, c.env.JWT_SECRET)
  return c.json({jwt})
})