import { NextResponse } from "next/server";

export async function middleware(request: Request) {

    if ( request.url.includes(`?secretKey=${process.env.SECRET_KEY}`) ) {
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: ['/Admin']
}