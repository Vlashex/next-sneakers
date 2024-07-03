import { NextResponse } from "next/server";
import { prisma } from "./lib/prisma";

const isLoggedIn: boolean = false

export function middleware(request: Request) {

    // const user = prisma.user.

    // if (request.url == 'http://localhost:3000/admin' && )

    if (isLoggedIn) {
        return NextResponse.next()
    }  

    return NextResponse.redirect(new URL('/LogIn', request.url))
}

export const config = {
    matcher: ['/test']
}