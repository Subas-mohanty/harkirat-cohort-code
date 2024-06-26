import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers/credentials";
const handler = NextAuth({
    providers : [
        CredentialsProvider({
            name : 'email',
            credentials : {
                email: { label: "email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials : any){
                return {
                    id : "user1"
                }
            }
        })
    ]
});

export const GET = handler;
export const POST = handler;