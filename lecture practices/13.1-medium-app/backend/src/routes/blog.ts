import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { blogSchema, updateBlogSchema } from "../zod";


export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables :{
    authorId : string
  }
}>();

// middleware
blogRouter.use("/*", async (c, next) => {
  // get the header
  // verify the header
  // if the header is correct, we need can proceed I
  // if not, we return the user a 403 status code
  const header = c.req.header("Authorization") || "";
  if(header == "") return c.text("Provide JWT")
  const token = header.split(" ")[1]; // ["Bearer", "token"]

  try {
    const response = await verify(token, c.env.JWT_SECRET);
    if (!response.id) {
      c.status(404);
      return c.json({ error: "Unauthorized" });
    }
    // this is how we can add data to context (c) 
    c.set("authorId", response.id);
    await next();
  } catch (error) {
    return c.json({
      error : "you are not logged in"
    })
  }
});

// create
blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  // zod validation
  const {success} = blogSchema.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      msg : "Invalid input"
    })
  }
  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: c.get("authorId") // and using this get method we can extract the value
    },
  });
  return c.json({
    id: blog.id,
  });
});

// update
blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  // zod validation
  const validation = updateBlogSchema.safeParse(body);
  if(!validation.success){
    c.status(411);
    return c.json({
      msg : "Invalid input"
    })
  }
  const blog = await prisma.post.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return c.json({
    id: blog.id,
  });
});

// we can add pagination here which means initially we will show user only 10 or 20 blogs but when he scrolls we can show him more
blogRouter.get('/bulk', async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL
  }).$extends(withAccelerate())
  
  const blogs = await prisma.post.findMany();
  return c.json({
    blogs
  })

})

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");
  try {
    const blog = await prisma.post.findFirst({
      where: {
        id
      },
    });
    return c.json({
      id: blog,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      msg: "Error while fetching",
    });
  }
});
