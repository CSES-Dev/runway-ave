import { NextRequest, NextResponse } from 'next/server';

const CONSENT_COOKIE_NAME = 'runway_cookie_consent';

export function middleware(request: NextRequest) {
    const consent = request.cookies.get(CONSENT_COOKIE_NAME)?.value ?? null;
    const response = NextResponse.next();
    if (consent === 'accepted' || consent === 'rejected') {
        response.headers.set('x-cookie-consent', consent);
    }else {
        response.headers.set('x-cookie-consent', 'undecided');
    }
    return response;
    
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};