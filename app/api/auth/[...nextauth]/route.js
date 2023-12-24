import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import Cookies from "js-cookie";
import axios from "axios";
// import { message } from "antd";

console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID, process.env.NEXT_PUBLIC_GOOGLE_SECRET_ID, process.env.NEXT_AUTH_SECRET, '&&&&&&&&&&&&&&&&&')
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET_ID ?? "",
            // redirectUri: "http://localhost:3000/api/auth/callback/google", // run the app the same port number which is given in the redirect url (3000)
            redirectUri: "https://fitpeps.com/api/auth/callback/google", // run the app the same port number which is given in the redirect url (3000)
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET ?? "",

})

export { handler as GET, handler as POST }