import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name : 'email',
            credentials : {
                email: { label: "email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials : any){
                // const userName = credentials.userName;
                // const password = credentials.password;

                // prisma is not present in this, so it will not work, this is how we can work with prisma
                // const user = await prisma.findOne({
                //     where : {
                //         email : userName,
                //         password : password
                //     }
                // })
                // if(!user) return null;
                // return {
                //     id : user.id,
                //     email : user.email
                // }

                return {
                    id : 1,
                    email : "subu@gmail.com"
                }
            }
        })
    ]
});

export const GET = handler;
export const POST = handler;