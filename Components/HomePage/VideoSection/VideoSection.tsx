"use client"
import React from 'react';
import { Box, Grid } from '@mui/material'
import { H5, H4 } from '@/Components/UI/Typography/Typography';
import { PRIMARY_COLOUR } from '@/utils/colours';
import Button from '@/Components/UI/Button/Button';
import { useQueryFetch, useQueryFetchByHeaders } from '@/hooks/useFetchData';
import { useRouter } from 'next/navigation';
import { message } from 'antd';


export default function VideoSection() {

    const fitnesContents = [
        {
            heading: 'For Beginner',
            imgUrl: 'Assets/Home/beginner.png',
            video: ''
        },
        {
            heading: 'For Intermediate',
            imgUrl: 'Assets/Home/intermediet.png',
            video: ''
        },
        {
            heading: 'For Experts',
            imgUrl: 'Assets/Home/expert.png',
            video: ''
        },

    ]

    const { fetchedData: fetchedData } = useQueryFetch('category')
    const { fetchedData: videoData } = useQueryFetch('video')
    console.log(videoData, '+++++++++++++++++++')

    // const { fetchedData: fetchedData } = useQueryFetchByHeaders('auth/profile')

    const data = useQueryFetchByHeaders('auth/profile').fetchedData

    // console.log("onr???????????????????????", one);


    console.log("fetchedData", data);

    const router = useRouter()

    return (
        <Grid container sx={{
            justifyContent: 'center', alignItems: 'center',
            my: { xs: 2, sm: 3, md: 4 },
            bgcolor: ''
        }}>

            <H4 fontWeight='bold' fontFamily="Oxygen" >Build Your Body With Us</H4>

            <H5 >We have 42 days  workout program for every section</H5>

            <Grid container justifyContent="center" bgcolor='' alignItems="center" sx={{ position: 'relative', bgcolor: 'transparent', overflow: 'hidden' }}>

                <Grid container
                    sx={{
                        display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
                        // bgcolor:'red'
                    }}
                >

                    <Grid bgcolor={PRIMARY_COLOUR} sx={{

                        height: 90,
                        width: '2000px',
                        position: 'absolute',
                        left: -10, right: 0,
                        margin: 0,
                        transformOrigin: '0 0',
                        top: '56%',
                        transform: ' rotate(-5.89deg)',


                    }} />

                    <Grid bgcolor={PRIMARY_COLOUR} sx={{

                        height: 5,
                        width: '2000px',
                        position: 'absolute', left: -10, right: 0, margin: 0,
                        top: '60%',
                        transform: ' rotate(-5.89deg)',
                    }} />

                </Grid>



                <Grid container justifyContent='space-around' lg={11} md={12} zIndex='2' sx={{
                    mt: { xs: 1, sm: 2, md: 4, lg: 5 }, bgcolor: 'transparent',
                    alignItems: 'center'
                }} >

                    <Grid container bgcolor='transparent' >

                        {
                            fetchedData?.map((data: any, index: any) =>


                                <Grid container xs={12} sm={6} md={3} sx={{
                                    bgcolor: 'transparent', justifyContent: 'center', alignItem: 'center',
                                    my: { xs: 1.5 }
                                }} key={index} >


                                    <Box onClick={data?.client?.isActive === false ? () => message.error('Please Login to Continue..') : () => router.push(`/videos?languageId=22&&categoryId=${data.id}`)} sx={{
                                        width: { xs: 270, sm: 230, md: 250, lg: 250 },
                                        height: { xs: 340, sm: 320, md: 310, lg: 330 },
                                        borderRadius: 5,
                                        backgroundImage: `url(${data.image ? data.image : `Assets/Home/darkrectangle.png`})`,
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'scale(1.06)',
                                            transition: '0.5s'
                                        },
                                    }}>
                                        <Grid container sx={{
                                            height: '100%',
                                            backgroundImage: `url('Assets/Home/darkrectangle.png')`,
                                            justifyContent: 'center',
                                            bgcolor: 'transparent', borderRadius: 5,

                                        }}>


                                            <Box sx={{
                                                bgcolor: 'transparent', height: 'fit-content',
                                                width: '100%',
                                                mt: 1,
                                                ml: 2
                                            }}>

                                                <H5 fontWeight='bold' width='100%' color="white" textAlign='start' fontFamily="Outfit">{data.name} </H5>

                                            </Box>

                                            <Box
                                                component='img'
                                                src={'/Assets/Icons/videoicon.png'}
                                                sx={{
                                                    width: 65, height: 65,
                                                    cursor: 'pointer',
                                                    bgcolor: 'transparent',

                                                }}
                                            />


                                        </Grid>

                                    </Box>

                                </Grid>

                            )
                        }

                    </Grid>



                </Grid>

            </Grid>
            {data?.client?.isActive === false || !data ?
                <Grid container sx={{ mt: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <Button letterSpacing={1.2} fontFamily="Oxygen"
                        display={data?.IsActive && 'none'}
                        onClick={() => router.push('/subscription')}>Subscribe</Button>
                </Grid> : null}

        </Grid >


    )
}


