import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
  const sessionToken = cookies().get(
    process.env.NEXT_AUTH_SESSION_TOKEN as string
  )?.value;
  if (!sessionToken) {
    const { pathname } = new URL(request.url);
    return NextResponse.redirect(
      new URL(`/login?redirect_to=${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ['/orders/:path*', '/checkout/:path*'],
};
