import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient()

// documentation for using prisma
// https://www.prisma.io/docs/getting-started/quickstart
// we have to use this following commands

// initialize an empty project and install typescript and ts-node
// npm init -y
// npm install typescript ts-node @types/node --save-dev

// initialize typescript project
// npx tsc --init

// install prisma
// npm install prisma --save-dev

// initialize prisma in the project
// npx prisma init --datasource-provider <database name , eg- postgres or mysql>

// migrate the prisma database
// npx prisma migrate dev --name init

// generate sql from prisma
// npm prisma generate