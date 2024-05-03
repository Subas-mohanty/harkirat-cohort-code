import { z } from "zod";

export const signUpParams = z.object({
  username : z.string(),
  password : z.string()
})

export type signUpParams = z.infer<typeof signUpParams>