import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    // providers: [
    //     GoogleProvider({
    //         clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
    //         clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET_ID ?? "",
    //         // redirectUri: "https://complete-marten-valid.ngrok-free.app/api/auth/callback/google", // run the app the same port number which is given in the redirect url (3000)
    //         // redirectUri: "https://fitpeps.com/api/auth/callback/google/", // run the app the same port number which is given in the redirect url (3000)
    //     })
    // ],
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET_ID,
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXT_AUTH_SECRET ?? "",

})

export { handler as GET, handler as POST }