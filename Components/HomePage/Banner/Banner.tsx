"use client"

import React from 'react';
import { Box, Grid } from '@mui/material'
import { SECONDARY_COLOUR, PRIMARY_COLOUR } from '@/utils/colours';
import Button from '@/Components/UI/Button/Button';
import { H1, H2, H5 } from '@/Components/UI/Typography/Typography';
import Dumbel from '@/Components/UI/Dumbel/Dumbel';
import { useRouter } from 'next/navigation';


export default function Banner() {

    const router = useRouter()

    const items = [
        {
            imgUrl: 'Assets/Icons/Treadmill.png',
            title: 'red'
        },
        {
            imgUrl: 'Assets/WorkoutCategory/Treadmill.png',
            title: 'blue'
        },
        {
            imgUrl: 'Assets/WorkoutCategory/Treadmill.png',
            title: 'red'
        },
        {
            imgUrl: 'Assets/WorkoutCategory/Treadmill.png',
            title: 'blue'
        },
    ]


    return (
        <Grid container
            sx={{
                mt: { xs: 5, md: 10, lg: 10 },
                display: { xs: 'none', sm: 'none', md: 'flex' }
            }}
        >

            <Grid xs={6} md={3.3}
                component="img"
                src="Assets/Home/gimImage2.png"
                sx={{
                    ml: { xs: 'auto', md: 3, lg: 5 },
                    // bgcolor: 'blue',
                }}
            />

            <Grid xs={11} md={8} lg={6.5} sx={{
                justifyContent: 'end', alignItems: 'end', ml: -8,
                bgcolor: 'transparent'
            }}>

                <H1 ml='auto' fontWeight="bold" color={PRIMARY_COLOUR}>WORKOUT</H1>
                <H2 ml='auto' fontWeight="bold" colour='red' mt={-11}>PLANS</H2>


                <Box sx={{
                    position: 'absolute',
                    right: { md: 60, lg: 150 },
                    bottom: { md: "40%", lg: 250 }, bgcolor: 'transparent'
                }}>

                    <Dumbel />

                </Box>

                <Grid container sx={{
                    ml: { md: 6, lg: 20 },
                    mb: { md: 'auto', lg: 'auto' },
                    justifyContent: 'space-around', alignItems: 'center',
                    bgcolor: ''
                }}>

                    {

                        items.map((data, index) =>

                            <Box sx={{
                                width: { md: 80, lg: 120 },
                                height: { md: 80, lg: 100 },
                            }}>

                                <Grid container height='100%' sx={{
                                    justifyContent: "center",
                                    alignItems: 'center',
                                    borderRadius: 1,
                                    backgroundColor: '#ECD268',
                                    flexDirection: 'column'
                                }}>

                                    <Box
                                        component='img'
                                        src='Assets/Icons/Treadmill.png'
                                        sx={{
                                            height: { md: 35, lg: 40 },
                                            width: { md: 35, lg: 40 },
                                            py: 0.3,
                                            bgcolor: 'transparent'

                                        }}
                                    />

                                    <H5 fontWeight='bold' letterSpacing={1} fontFamily="Oxygen" >Diet</H5>

                                </Grid>

                            </Box>

                        )
                    }

                    <Button

                        onClick={() => router.push('/subscription')}
                        letterSpacing={1.2} fontFamily="Oxygen"
                        mt='auto' >Subscribe</Button>

                </Grid>

            </Grid>

        </Grid >
    )
}
