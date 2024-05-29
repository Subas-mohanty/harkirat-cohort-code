import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
const prisma = new PrismaClient();

export function GET(){
    return Response.json({
        name : "subas",
        email : "subas@gmail.com"
    })
}

export async function POST(req : NextRequest){
    const body = await req.json();
    const user = await prisma.user.create({
        data : {
            userName : body.username,
            password : body.password
        }
    })
    
    return Response.json({
        msg : "You are logged in"
    })
}