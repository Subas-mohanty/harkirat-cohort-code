
import { Hono } from 'hono'

const app = new Hono()

async function authMiddlewar(c: any, next : any){
  // c is context of this request, context has request, response, headers, query parameters
  if(c.req.header('Authorization')){
    // Do validation
    await next();
  }
  else{
    return c.text("You don't have access")
  }
}

// here we are using app.use syntax like express, we can also pass it in the function argument
// app.post("/submit", authMiddleware, async(c)=>{})

app.use(authMiddlewar);


app.get('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app