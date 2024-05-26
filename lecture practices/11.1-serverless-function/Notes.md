## So the first thing is why we should use CloudFlare ?
- The answer is, cloudfare provide a serverless function.
- It charges the user per request, if the number of request is less, then the amount the developer need to give is low or it is high. Not a certain amount, no matter what is the number of requests on your server.


## Why `cloudflare` is not directly used by developer ?
1. It has a weird syntax compared to express js.
2. It handles get and post request in one function with makes it clumsy.


## How to solve this problem ?
- If we have a existing project written in express then either we have to convert the whole code to cloudfare or we can make a separate file or function and put the code which are common in both cloudflare and express and convert the remaining code to cloudflare.
- But the above step is quite hectic so it is kind of boring and not so efficient.
- The best way is to use a library
  - `hono`
  - `lukeed`
  - `worktop`
- These are some libraries that can do our task which was made difficult by cloudflare

- visit hono documentation here [Hono documentation](https://hono.dev/top)