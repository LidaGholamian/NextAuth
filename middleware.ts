import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log('middleware');
    const cookie = request.cookies.get('clb-session');

    if (cookie && request.nextUrl.pathname.startsWith('/signin')) {
        const url = request.nextUrl.clone();
        url.pathname = "/dashboard/courses";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/signin'
}
