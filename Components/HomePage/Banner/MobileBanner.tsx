"use client"

import React from 'react';
import { Typography, Grid, Box } from "@mui/material";
import { H1, H2, H5, H6, } from '@/Components/UI/Typography/Typography';
import { SECONDARY_COLOUR, PRIMARY_COLOUR } from '@/utils/colours';
import Button from '@/Components/UI/Button/Button';
import { useQueryFetchByHeaders } from '@/hooks/useFetchData';
import { useRouter } from 'next/navigation';



export default function MobileBanner() {

    const { fetchedData: fetchedData } = useQueryFetchByHeaders('auth/profile')
    const router = useRouter()

    // const items = [
    //     {
    //         imgUrl: 'Assets/Icons/Treadmill.png',
    //         title: 'red'
    //     },
    //     {
    //         imgUrl: 'Assets/WorkoutCategory/Treadmill.png',
    //         title: 'blue'
    //     },
    //     {
    //         imgUrl: 'Assets/WorkoutCategory/Treadmill.png',
    //         title: 'red'
    //     },
    //     {
    //         imgUrl: 'Assets/WorkoutCategory/Treadmill.png',
    //         title: 'blue'
    //     },
    // ]
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
        <Grid container sx={{
            display: { xs: 'flex', md: 'none' }, justifyContent: 'center',
            overflow: 'none', bgcolor: '',
            mt: { xs: 10 }, textAlign: 'center'
        }}>

            <Box sx={{
                ml: { sm: 21, md: 7 },
                mr: 3,
                bgcolor: '', height: 'fit-content',
                // ml:'auto',

            }}>
                <H2 fontWeight="bold" color={PRIMARY_COLOUR}>EVERY STEP</H2>
                <H2 ml='auto' fontWeight="bold" colour='' mt={-11}>COUNTS...</H2>
            </Box>

            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>

                <Grid container xs={10}
                    component='img'
                    src="Assets/Home/gimImage6.png"
                    sx={{
                        // display: 'flex',
                        bgcolor: '', justifyContent: 'center', alignItems: 'center',
                        // mt: -4,
                        height: { xs: 340, sm: 580 },
                        // width: { xs: 340, sm: 580 },
                        mt: { xs: 'auto', sm: 'auto', md: -4, lg: -4 }
                    }}

                />

                {/* <Grid container xs={4} sx={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column' }}> */}

                {/* {
                        items.map((data, index) =>

                            <Grid sx={{
                                bgcolor: SECONDARY_COLOUR,
                                width: { xs: 100, sm: 100 },
                                height: {
                                    xs: ((index === 0 || index === 1 ? '80' : 110)), sm: 100
                                },
                                borderRadius: 1, marginTop: '10px', padding: '5px'
                            }}>


                                <Box bgcolor="red" sx={{

                                    position: 'relative',
                                    my: { xs: 1, sm: 1 },
                                    borderRadius: 1, bgcolor: 'transparent'
                                }}>

                                    <Grid container sx={{ height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', bgcolor: 'transparent' }}>
                                        

                                        <Box sx={{
                                            bgcolor: 'transparent', textAlign: 'center', display: 'flex', alignItems: 'center'
                                        }}>
                                            <H6 fontWeight='semibold' >{data.title}</H6>
                                        </Box>


                                    </Grid>

                                </Box>
                            </Grid>



                        )
                    } */}


                {/* </Grid> */}
                {/* <Button my={5} > Subscribe</Button> */}
                {fetchedData?.client?.isActive === false || !fetchedData || new Date(fetchedData?.client?.expireOn) >= Date.now() ? <Button
                    onClick={() => router.push('/subscription')}
                    my={5} >Subscribe</Button> : null}

            </Grid>

        </Grid >
    )
}
