import { message } from 'antd'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useSession, signIn } from 'next-auth/react'
import GoogleButton from 'react-google-button'
import axios from 'axios'
import { BASE_URL } from '@/utils/urls'
import { useRouter } from 'next/navigation'

function GoogleAuthButton() {

    const router = useRouter()
    const session = useSession()
    useEffect(() => {

        if (session && session.status === 'authenticated') {
            axios.get(`${BASE_URL}user/${session.data.user?.email}`).then((res) => {
                axios.post(`${BASE_URL}auth/googleAuth`, {
                    username: session.data.user?.email,
                    name: session.data.user?.name
                }).then((res) => {
                    Cookies.set('auth_token', res.data.accessTocken)
                    router.push('/')
                    message.success(`Hi, Welcome ${session.data.user?.name}`)

                }).catch((err) => {
                    console.log(err)

                })

            }).catch((err) => {
                console.log(err)
            })
        }
    }, [session])

    return (
        <GoogleButton
            onClick={() => signIn("google")}
            type='dark'
            style={{ marginTop: '35px', width: '400px', fontWeight: 'bold', color: '#4285F4' }}
            label='Continue with Google'
        >Continue with google</GoogleButton>
    )
}

export default GoogleAuthButton