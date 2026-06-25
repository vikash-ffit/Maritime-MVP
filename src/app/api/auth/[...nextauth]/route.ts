// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.email === "ship.crew@navsuite.com" && credentials?.password === "Password1234") {
          return { id: "ship-1", name: "Ship Officer", email: "ship.crew@navsuite.com", role: "SHIP" };
        }
        if (credentials?.email === "shore.crew@navsuite.com" && credentials?.password === "Password1234") {
          return { id: "shore-1", name: "Shore Admin", email: "shore.crew@navsuite.com", role: "SHORE" };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user.role = token.role;
      return session;
    },
  },
  // 🚀 THIS IS THE CRITICAL FIX FOR THE 404 REDIRECT
  pages: {
    signIn: "/", // Tells NextAuth: "My custom login page is the home page!"
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };