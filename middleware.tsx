import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwtDecode from 'jwt-decode'
import * as moment from "moment-timezone"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const token: any = request.cookies.get("auth_token") || null
    console.log(token, '444444444444444444s44')
    let isToken = false;

    let decodedtoken: any = null;

    try {

        if (token && token?.value) {

            decodedtoken = jwtDecode(token?.value)

            decodedtoken && decodedtoken?.exp ? isToken = moment.utc().valueOf() * 1000 > decodedtoken.exp : null;

        }

        if (isToken === false && request.url) {

            return NextResponse.redirect(new URL('/login', request.url))

        }

        else if (isToken === true && request.nextUrl.pathname === '/login') {

            return NextResponse.redirect(new URL('/', request.url))

        }

    } catch (error) {

        if (isToken === false && request.url) {

            return NextResponse.redirect(new URL('/login', request.url))

        }

    }
}


export const config = {

    matcher: [
        // "/",
        "/videos/:path*",
        "/subscription/:path*"
    ]

}


