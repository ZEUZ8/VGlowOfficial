import Cookies from 'js-cookie';
import { NextResponse } from 'next/server';

export function middleware(request) {

  // For other paths, continue without changes
  const cookies = request.cookies;
  const user = JSON.parse(cookies.get("user").value) || null
  const token = cookies.get("token").value || null

  const userPrivateRoutes = ['/profile','/cart','/bag','/checkout']


  return NextResponse.next();
}
export const config = {
  
  matcher: ["/user/:path*"], 
  // matcher: [
  //   '/profile/:path*',
  //   '/dashboard/:path*',
  //   '/checkout/:path*',
  //   '/user/:path*', // Matches /user and its subroutes
  //   '/user' // Matches /user exactly
  // ],
};
