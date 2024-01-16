"use client"

import React from 'react';
import { Box, Grid, Typography } from '@mui/material'
import { SECONDARY_COLOUR, PRIMARY_COLOUR } from '@/utils/colours';
import Button from '@/Components/UI/Button/Button';
import { H1, H2, H5, H6 } from '@/Components/UI/Typography/Typography';
import Dumbel from '@/Components/UI/Dumbel/Dumbel';
import { useRouter } from 'next/navigation';
import { useQueryFetchByHeaders } from '@/hooks/useFetchData';


export default function Banner() {

    const router = useRouter()

    const { fetchedData: fetchedData } = useQueryFetchByHeaders('auth/profile')

    const items = [
        {
            imgUrl: 'Assets/Icons/Treadmill.png',
            title: 'Muscle gain'
        },
        {
            imgUrl: 'Assets/WorkoutCategory/Treadmill.png',
            title: 'Weight Loss'
        },
        {
            imgUrl: 'Assets/WorkoutCategory/Treadmill.png',
            title: 'Men sexual health enhancement program'
        },
        {
            imgUrl: 'Assets/WorkoutCategory/Treadmill.png',
            title: 'Women sexual health enhancement program'
        },
    ]


    return (
        <Grid container
            sx={{
                mt: { xs: 5, md: 10, lg: 10 },
                display: { xs: 'none', sm: 'none', md: 'flex' }
            }}
        >

            <Grid xs={6} md={4}
                component="img"
                src="Assets/Home/gimImage6.png"
                sx={{
                    ml: { xs: 'auto', md: 3, lg: 3 },
                    width: '400px',
                    height: '650px',
                    // bgcolor: 'blue',
                    // boxShadow: '4px 4px 4px 4px'
                    mt: { md: '30px' }
                }}
            />

            <Grid xs={11} md={8} lg={6.5} sx={{
                justifyContent: 'end', alignItems: 'end', ml: -8,
                bgcolor: 'transparent', mt: 10
            }}>

                <H2 ml='auto' fontWeight="bold" color={PRIMARY_COLOUR}>EVERY STEP</H2>
                {/* <H2 ml='auto' fontWeight="bold" mt={-11} sx={{ color: 'red' }}>PLANS</H2> */}
                <Typography
                    variant="h2"
                    style={{ color: 'gray', background: 'none', fontWeight: 'bold', marginLeft: 'auto', fontSize: '100px', marginTop: '-20px', marginBottom: '10px', textAlign: 'end' }}
                >
                    COUNTS...
                </Typography>

                <Box sx={{
                    position: 'absolute',
                    right: { md: 60, lg: 150 },
                    bottom: { md: "40%", lg: "40%" }, bgcolor: 'transparent'
                }}>

                    <Dumbel />

                </Box>


                <Grid container sx={{
                    ml: { md: 6, lg: 20 },
                    mb: { md: 'auto', lg: 'auto' },
                    mt: { md: 'auto', lg: 10 },
                    justifyContent: 'space-around', alignItems: 'center',
                    bgcolor: '',

                }}>


                    {/* {

                        items.map((data, index) =>

                            <Box sx={{
                                // width: { md: 80, lg: 120 },
                                width: { md: 100, lg: 120 },
                                height: { md: 160, lg: 160 },
                                backgroundImage: 'url("Assets/Icons/Treadmill.png")',
                                backgroundSize: 'cover'
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

                                    <H6 fontWeight='bold' letterSpacing={1} fontFamily="Oxygen" >{data.title}</H6>

                                </Grid>

                            </Box>

                        )
                    } */}

                    {fetchedData?.client?.isActive === false || !fetchedData || new Date(fetchedData?.client?.expireOn) >= Date.now() ? <Button
                        display={fetchedData?.IsActive && 'none'}
                        onClick={() => router.push('/subscription')}
                        letterSpacing={1.2} fontFamily="Oxygen"
                        mt='auto' >Subscribe</Button> : null}
                </Grid>

            </Grid>

        </Grid >
    )
}
