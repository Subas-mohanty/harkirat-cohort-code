import z from "zod"

export const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.optional(z.string())
})
export const userSignInSchema = z.object({
    email : z.string().email(),
    password : z.string().min(6)
})

export const blogSchema = z.object({
    title: z.string(),
    content: z.string()
});

export const updateBlogSchema = z.object({
    title: z.string(),
    content: z.string(),
    id : z.string()
});

// zod inference , this should not be here as we need it in frontend and that will be in a separate folder
// we will see its work in monorepos

export type userSchema = z.infer<typeof userSchema>

export type blogSchema = z.infer<typeof blogSchema>