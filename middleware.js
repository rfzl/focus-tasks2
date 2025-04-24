// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Seharusnya kita memeriksa session di sini, tapi karena kita menggunakan
  // Firebase Authentication dengan Context API di sisi client,
  // proteksi route utama dilakukan di level komponen dengan redirect

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};