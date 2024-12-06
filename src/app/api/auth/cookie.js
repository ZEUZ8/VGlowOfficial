const { cookies } = require("next/headers")

export function getCookie() {
    // Securely retrieve the cookie
    const cookie = cookies();
    const name = cookie.get("name");

    // Check if the cookie exists and return it securely
    if (name) {
        return name.value; // Safely return the cookie value
    } else {
        return null; // Handle case where the cookie is not set
    }
}

export function setCookie(value) {
    const cookie = cookies();

    // Set the cookie with secure options
    cookie.set({
        name: "Token",
        value,
        httpOnly: true, // Prevents JavaScript access to the cookie
        secure: process.env.NODE_ENV === "production", // Ensures HTTPS in production
        sameSite: "Strict", // Strict SameSite policy to prevent CSRF attacks
        path: "/", // Ensures the cookie is accessible across the whole site
        maxAge: 60 * 60 * 24 , // Cookie expiry set for 1 day
    });

    return "Cookie set successfully!";
}