import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Optional: Perform custom user validation if necessary
      console.log("Google Sign-In successful", { user, account, profile });
      return true; // Allow sign-in
    },
    async session({ session, user, token }) {
      // Include custom logic for sessions if needed
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin", // Optional: Custom sign-in page
    error: "/auth/error", // Optional: Custom error page
  },
};
