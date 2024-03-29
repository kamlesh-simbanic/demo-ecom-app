// import { AuthOptions } from "next-auth";
// import Providers from "next-auth/providers/";
import CredentialsProvider from "next-auth/providers/credentials";

import NextAuth, { Account, Profile, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

export default NextAuth({
  providers: [
    // CredentialsProvider({
    //   // The name to display on the sign-in form (e.g., 'Sign in with Email')
    //   name: "Email",
    //   // Callback function to validate credentials
    //   credentials: {
    //     email: { label: "Email", type: "email" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials: any) {
    //     // Add your authentication logic here
    //     const user = { id: "1", name: "John Doe", email: credentials.email };
    //     if (user) {
    //       return user;
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Email",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXT_SECRET,
  callbacks: {
    // async jwt(params: {
    //   token: JWT;
    //   user: AdapterUser | User;
    //   account: Account | null;
    //   profile?: Profile;
    //   session?: Session;
    // }) {
    //   // Add access_token to the token right after signin
    //   const { token, user } = params;
    //   if (user) {
    //     token.id = user.id;
    //   }
    //   return token;
    // },
    // async session(params: {
    //   session: Session;
    //   token: JWT;
    //   user: AdapterUser | User;
    //   //   account: Account | null;
    //   profile?: Profile;
    //   trigger?: "signIn" | "signUp" | "update";
    //   isNewUser?: boolean;
    // }) {
    //   // Pass user id to the session right after signin
    //   const { session, token } = params;
    //   // if (session.user) {
    //   //   session.user = token.id;
    //   // }
    //   return session;
    // },
  },
});
