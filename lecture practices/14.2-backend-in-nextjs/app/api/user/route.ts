import { NextRequest, NextResponse } from "next/server";

export function GET(){
    return Response.json({
        name : "subas",
        email : "subas@gmail.com"
    })
}

export async function POST(req : NextRequest){
    const body = await req.json();
    console.log(body);
    
    return Response.json({
        msg : "You are logged in"
    })
}