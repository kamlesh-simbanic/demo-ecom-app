// import NextAuth from "next-auth";
// import authOptions from "./option";
// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

// import { NextApiHandler } from "next";
// import NextAuth from "next-auth";
// import authOptions from "./option";

// const handler: NextApiHandler = (req, res) => NextAuth(req, res, authOptions);

// export default handler;
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
// import Providers from "next-auth/providers";

import CredentialsProvider from "next-auth/providers/credentials";

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to validate the credentials and fetch the user
        const user = { id: "1", name: "Example User" };
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null or false the credentials will be rejected
          return null;
          // You can also throw an error if you want to show an error message
          // throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin", // Custom sign-in page URL
  },
};

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await NextAuth(req, res, options);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  await NextAuth(req, res, options);
}
