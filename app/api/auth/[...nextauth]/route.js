import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET_ID ?? ""

        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log(user, account, profile, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
            const response = await axios.post("http://localhost:9000/v1/auth/userExists",
                { email: profile.email })
            console.log(response, 'LLLLLLLLL')
            if (response && response.data?.value === true) {
                return true
            }
            else {
                const data = {
                    firstName: profile.given_name,
                    lastName: profile.family_name,
                    email: profile.email,
                    profileUrl: profile.picture
                }
                const response = await axios.post(
                    "http://localhost:9000/v1/auth/signup",
                    data
                );
                // retruns true thereby passing control to the next callback
                return true;
            }
        }
    }
})

export { handler as GET, handler as POST }