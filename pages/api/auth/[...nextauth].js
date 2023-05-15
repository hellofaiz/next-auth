import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


const crypto = require('crypto');
const secret = crypto.randomBytes(32).toString('hex');
console.log(secret);
export default NextAuth({
  // Configure one or more authentication providers

  // google provider
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  secret
})