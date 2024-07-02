import { NextResponse } from "next/server";

const isLoggedIn: boolean = false

export function middleware(request: Request) {

    console.log('middleware')

    if (isLoggedIn) {
        return NextResponse.next()
    }  

    return NextResponse.redirect(new URL('/LogIn', request.url))
}

export const config = {
    matcher: ['/test']
}