"use client"

import React from 'react';
import { Typography, Grid, Box } from "@mui/material";
import { H1, H2, H5, } from '@/Components/UI/Typography/Typography';
import { SECONDARY_COLOUR, PRIMARY_COLOUR } from '@/utils/colours';
import Button from '@/Components/UI/Button/Button';



export default function MobileBanner() {
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
        <Grid container sx={{
            display: { xs: '', md: 'none' },
            overflow: 'none', bgcolor: '',
            mt: { xs: 10 }
        }}>

            <Box sx={{
                ml: { xs: 'auto', sm: 21, md: 7 },
                mr: 3,
                bgcolor: '', height: 'fit-content',
                // ml:'auto'
            }}>
                <H1 fontWeight="bold" color={PRIMARY_COLOUR}>WORKOUT</H1>
                <H2 ml='auto' fontWeight="bold" colour='' mt={-11}>PLANS</H2>
            </Box>

            <Grid container>

                <Grid container xs={8}
                    component='img'
                    src="Assets/Home/gimImage2.png"
                    sx={{
                        bgcolor: '', justifyContent: 'center', alignItems: 'center',
                        // mt: -4,
                        height: { xs: 340, sm: 580 },
                        mt: { xs: 'auto', sm: 'auto', md: -4, lg: -4 }
                    }}

                />

                <Grid container xs={4} sx={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column' }}>

                    {
                        items.map((data, index) =>

                            <Grid sx={{
                                bgcolor: SECONDARY_COLOUR,
                                width: { xs: 65, sm: 100 },
                                height: { xs: 65, sm: 100 },
                                borderRadius: 1
                            }}>


                                <Box bgcolor="red" sx={{

                                    position: 'relative',
                                    my: { xs: 1, sm: 1 },
                                    borderRadius: 1, bgcolor: 'transparent'
                                }}>

                                    <Grid container sx={{ height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', bgcolor: 'transparent' }}>

                                        <Box
                                            component='img'
                                            src='Assets/Icons/Treadmill.png'
                                            sx={{
                                                width: { xs: 25, sm: 35 },
                                                height: { xs: 25, sm: 35 },
                                                bgcolor: 'transparent'

                                            }}
                                        />

                                        <Box sx={{
                                            mt: { xs: 0, sm: 0.5 },
                                            bgcolor: 'transparent'
                                        }}>
                                            <H5 fontWeight='bold' >Diet</H5>
                                        </Box>


                                    </Grid>

                                </Box>
                            </Grid>



                        )
                    }

                    <Button my={0.5}>Subscribe</Button>

                </Grid>

            </Grid>

        </Grid >
    )
}
