import { NextRequest, NextResponse } from 'next/server';

const CONSENT_COOKIE_NAME = 'runway_cookie_consent';

export function middleware(request: NextRequest) {
    const consent = request.cookies.get(CONSENT_COOKIE_NAME)?.value ?? null;
    const response = NextResponse.next();
    if (consent === 'accepted' || consent === 'rejected') {
        response.headers.set('x-cookie-consent', consent);
    }
    return response;
}
