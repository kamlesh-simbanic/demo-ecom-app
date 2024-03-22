// import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import NextAuth, { Account, Profile, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";
// import Providers from "next-auth/providers/";

interface CustomToken extends JWT {
  id: string;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., 'Sign in with Email')
      name: "Email",
      // Callback function to validate credentials
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        // Add your authentication logic here
        const user = { id: "1", name: "John Doe", email: credentials.email };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt(params: {
      token: CustomToken;
      user: AdapterUser | User;
      account: Account | null;
      profile?: Profile;
      session?: Session;
    }) {
      // Add access_token to the token right after signin
      const { token, user } = params;
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(params: {
      session: Session;
      token: CustomToken;
      user: AdapterUser | User;
      //   account: Account | null;
      profile?: Profile;
      trigger?: "signIn" | "signUp" | "update";
      isNewUser?: boolean;
    }) {
      // Pass user id to the session right after signin
      const { session, token } = params;
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  //   callbacks: {
  //     async jwt(token: any, user: any) {
  //       // Add access_token to the token right after signin
  //       if (user) {
  //         token.id = user.id;
  //       }
  //       return token;
  //     },
  //     async session(session: Session, token: string) {
  //       // Pass user id to the session right after signin
  //       session.user.id = token.id;
  //       return session;
  //     },
  //   },
});
