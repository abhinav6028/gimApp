"use client"
import React from 'react';
import { Grid, Box } from '@mui/material'
import Button from '../Button/Button';
import { H5 } from '../Typography/Typography';
//import { BG_COLOUR } from '@/utils/colours';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useQueryFetchByHeaders } from '@/hooks/useFetchData';
import { signOut } from 'next-auth/react'
import { message } from 'antd';

export default function Header() {

    const token = Cookies.get('auth_token')

    const router = useRouter()

    const { fetchedData: fetchedData } = useQueryFetchByHeaders('auth/profile')

    console.log("fetchedData>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", fetchedData);

    const logout = async () => {
        await signOut(),
            Cookies.remove('auth_token'),
            window.location.reload()
    }


    const headrDaata = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Videos',
            path: '/videos?languageId=22&categoryId=4'
        },
        {
            name: 'Testimonials',
            path: '/testimonials'
        },
        {
            name: 'Contact Us',
            path: '/testimonials'
        }
    ]

    const videoTabOnClick = (data: { name: any; path: any; }) => {
        if (token) {
            if (data.name === 'Videos' && fetchedData?.client?.isActive === false) {
                message.error('Please Subscribe to Continue..')
            } else {
                router.push(data.path)
            }
        } else {
            router.push('/login')
        }
    }

    return (
        <Grid container sx={{
            justifyContent: 'space-between', py: 1.5, alignItems: 'center',
            // bgcolor: 'red',
            // bgcolor: { xs: 'red', sm: 'blue', md: 'green', lg: 'pink' },
            zIndex: 100, position: 'fixed',
            display: { xs: 'none', sm: 'none', md: 'flex' }
        }}>
            <Box
                component="img"
                src='/Assets/logo.png'
                width={'200px'}
                sx={{ paddingX: '20px', paddingY: '10px', marginLeft: '36px' }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                {
                    headrDaata.map((data, index) =>

                        <Box
                            onClick={() => videoTabOnClick(data)}
                            sx={{ mr: { xs: 1.5, md: 2.8 } }}>

                            <H5 cursor='pointer' fontFamily='Oxygen' letterSpacing={1.2}>{data.name}</H5>

                        </Box>

                    )
                }

                <Box sx={{ display: token ? 'none' : 'flex' }}>

                    <Button onClick={() => { router.push('/signup') }} btnName='signup' mr={3}>Sign Up</Button>

                    <Button mr={5} onClick={() => { router.push('/login') }} btnName='login'>Log In</Button>

                </Box>

                <Box sx={{ display: token ? 'flex' : 'none' }}>
                    {fetchedData?.client?.isActive ? null
                        :
                        <Button
                            onClick={() => router.push('/subscription')}
                            style={{ display: fetchedData?.client?.isActive ? 'none' : 'flex' }}
                            mr={3}
                        >
                            Subscribe{fetchedData?.client?.isActive}
                        </Button>
                    }

                    <Button mr={5} onClick={logout}>Log Out</Button>

                </Box>

            </Box>


        </Grid >
    )
}
