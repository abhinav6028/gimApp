"use client"
import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material'
import Button from '../Button/Button';
import { H5, H6 } from '../Typography/Typography';
//import { BG_COLOUR } from '@/utils/colours';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useQueryFetchByHeaders } from '@/hooks/useFetchData';
import { signOut } from 'next-auth/react'
import { Typography, message } from 'antd';
import axios from 'axios';
import { BASE_URL } from '@/utils/urls';

export default function Header() {
    // const [fetchedData, setFetchedData] = useState()

    // useEffect(() => {
    //     axios.get(BASE_URL + 'auth/profile', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: 'Bearer ' + token
    //         }
    //     }).then((response) => {
    //         setFetchedData(response.data.result);

    //     }).catch((error) => {
    //         console.log(error, '0000000')
    //     })


    // }, []);



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
    const expiryDateObject = new Date(fetchedData?.client?.expireOn);
    expiryDateObject.setHours(23, 59, 59, 999);

    const videoTabOnClick = (data: { name: any; path: any; }) => {
        if (token) {
            if (data.name === 'Videos' && fetchedData?.client?.isActive === false) {
                message.error('Please Subscribe to Continue..')
            } else if (data.name === 'Videos' && Date.now() > expiryDateObject) {
                message.error('Subscription expired.. Kindly renew subscription to continue')
            }
            else {
                router.push(data.path)
            }
        } else {

            if (data.name === 'Videos') {
                message.error('Please login to continue')
                router.push('/login')
            }
            else {
                router.push(data.path)
            }
        }
    }
    console.log('444444444444444')
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

                            <Typography style={{ cursor: 'pointer', fontWeight: '600', fontSize: '16px' }}>{data.name}</Typography>

                        </Box>

                    )
                }

                <Box sx={{ display: token ? 'none' : 'flex' }}>

                    <Button onClick={() => { router.push('/signup') }} btnName='signup' mr={3} >Sign Up</Button>

                    <Button mr={5} onClick={() => { router.push('/login') }} btnName='login'>Log In</Button>

                </Box>

                <Box sx={{ display: token ? 'flex' : 'none' }}>
                    {fetchedData?.client?.isActive ? null
                        :
                        <Button
                            onClick={() => router.push('/subscription')}
                            style={{ display: fetchedData?.client?.isActive ? 'none' : 'flex', fontSize: '16px', }}
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