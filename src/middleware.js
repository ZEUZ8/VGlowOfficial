// Middleware to handle user authorization
// Extracting the token and user details from cookies to perform authorization.
// The token is verified, and the user data is used to manage access control across protected routes.

import { NextResponse } from "next/server";

export function middleware(request) {
  // For other paths, continue without changes
  const cookies = request.cookies;
  const user = cookies.get("user")?.value || null;
  if(user)JSON.parse(user)
  const token = cookies.get("token")?.value || null;

  const pathname = request?.nextUrl?.pathname;

  const privateRoutes = ["/profile", "/cart", "/bag", "/checkout",'/admin'];
  const publicRoutes = ["/login", "/signup", "/"];
  const authRoutes = ['/login','/signup']

  //getting the user from the request
  const getUserRole = () => {
    if (pathname.startsWith("/admin")) {
      return "admin";
    }
    if (pathname.startsWith("/user")) {
      return "user";
    }
    return null;
  };
  const role = getUserRole();

  // Check if the route is public or private
  const isPrivateRoute = privateRoutes.some((route) => pathname.includes(route));
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));
  const isAuthRoutes = authRoutes.some((route)=>pathname.includes(route))

   // Redirect logged-in users away from login or signup pages
   if(isAuthRoutes && token){
    if(role === 'admin' && user?.role === "Admin"){
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    if(role === 'user' && user?.role === "User"){
      return NextResponse.redirect(new URL("/user/products", request.url));
    }
   }

   // Authorization logic
   if (role === "admin") {
    // if(isAuthRoutes){
    //   return NextResponse.next()
    // }
    // if (!token || user?.role !== 'Admin') {
    //   return NextResponse.redirect(new URL("/admin/login", request.url));
    // }
    // Allow admin access
    return NextResponse.next();
  }

  if (role === "user") {
    if (isPublicRoute) {
      // Allow access to public routes
      return NextResponse.next();
    }

    if (isPrivateRoute && !token) {
      return NextResponse.redirect(new URL("/user/login", request.url));
    }

    // Allow user access
    return NextResponse.next();
  }

  // If no role or invalid path
  return NextResponse.redirect(new URL("/login", request.url));

}
export const config = {
  matcher: ["/admin/:path*", "/user/:path*",'/admin/login'],
};
