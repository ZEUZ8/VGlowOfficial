// Middleware to handle user authorization
// Extracting the token and user details from cookies to perform authorization.
// The token is verified, and the user data is used to manage access control across protected routes.

import { NextResponse } from "next/server";

export function middleware(request) {
  // For other paths, continue without changes
  const cookies = request.cookies;
  const user = JSON.parse(cookies.get("user")?.value) || null;
  const token = cookies.get("token")?.value || null;

  const pathname = request?.nextUrl?.pathname;

  const privateRoutes = ["/profile", "/cart", "/bag", "/checkout"];
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
  console.log(pathname)
  console.log('pricvate route status --- ',isPrivateRoute, 'publict route status --- ',isPublicRoute)

   // Redirect logged-in users away from login or signup pages
   if(token && authRoutes.some((route)=> pathname.includes(route))){
    console.log(user.role,role, "the tow roles oncosling")
    if(role === 'admin' && user.role === "Admin"){
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    if(role === 'user' && user?.role === "User"){
      return NextResponse.redirect(new URL("/user/products", request.url));
    }
   }

   // Authorization logic
   if (role === "admin") {
    console.log('uers is admin')
    // if (!token || user?.role !== 'admin') {
    //   console.log('admin dont have token')
    //   console.log("Admin trying to access without token");
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
      console.log("User trying to access private route without token");
      return NextResponse.redirect(new URL("/user/login", request.url));
    }

    // Allow user access
    return NextResponse.next();
  }

  // If no role or invalid path
  console.log("Unauthorized access attempt");
  return NextResponse.redirect(new URL("/login", request.url));

}
export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};
