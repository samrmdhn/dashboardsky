import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('ACCESS_TOKEN')?.value

    const currentPath = request.nextUrl.pathname

    // If the user has a token and is trying to access the login page, redirect to the dashboard
    if (token && currentPath === '/login') {
        return NextResponse.redirect(new URL('/dashboard/home', request.url))
    }

    // If the user does not have a token and is accessing protected routes, redirect to login
    if (!token && currentPath.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // Allow access if conditions are met
    return NextResponse.next()
}

// Apply middleware to specific routes
export const config = {
    matcher: ['/dashboard/:path*', '/login'], // Apply middleware to `/dashboard` and `/login`
}
