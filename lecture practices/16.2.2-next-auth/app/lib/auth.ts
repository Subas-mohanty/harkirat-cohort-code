import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers : [
        CredentialsProvider({
            name : 'email',
            credentials : {
                email: { label: "email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials : any){
                console.log(credentials);
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
                    name : "subas mohanty",
                    email : "subu@gmail.com"
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
        })
    ],
    secret : process.env.NEXTAUTH_SECRET,

    callbacks: {
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
        session: ({ session, token, user }: any) => {
          if (session.user) {
              session.user.id = token.uid
          }
          return session
      }
    },
    // pages : {
    //     signIn : "/signin"
    // }
}