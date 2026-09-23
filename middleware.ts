import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // শুধুমাত্র ড্যাশবোর্ড বা অ্যাডমিন পেজের জন্য টোকেন চেক করুন
  // হোমপেজ (/) কে আর ব্লক করবেন না
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

// Middleware শুধু ড্যাশবোর্ডের জন্য কাজ করবে, হোমপেজের জন্য নয়
export const config = {
  matcher: ["/dashboard/:path*"], 
};