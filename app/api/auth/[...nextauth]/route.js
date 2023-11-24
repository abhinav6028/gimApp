import { BASE_URL } from "@/utils/urls";
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
            redirectUri: "http://localhost:3000/api/auth/callback/google",

        })
    ],
    secret: process.env.NEXT_AUTH_SECRET ?? "",
    callbacks: {
        async signIn({ user, account, profile }) {
            try {

                console.log(user, account, profile, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
                const response = await axios.get(`${BASE_URL}user/${profile.email}`)
                console.log(response, 'LLLLLLLLL')

                if (response.data.statusCode === 200) {
                    // message.success('user loginned successfully')
                    console.log('user loginned successfully')
                    // Cookies.set('auth_token', account.access_token)
                } else {
                    console.log('user not registered. registering user..')
                    // message.error('user not registered. registering user..')
                }

            }
            catch (err) {
                console.log(err)
                return false;
            }
        }
    }
})

export { handler as GET, handler as POST }