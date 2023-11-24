"use client"
import Dumbel from '@/Components/UI/Dumbel/Dumbel'
import Header from '@/Components/UI/Header/Header'
import MobileHeader from '@/Components/UI/Header/MobileHeader'
import { H4 } from '@/Components/UI/Typography/Typography'
import { BG_COLOUR, PRIMARY_COLOUR, SECONDARY_COLOUR } from '@/utils/colours'
import { Avatar, Box, Grid, Typography } from '@mui/material';
import Styles from '../../Styles/scrolling.module.css'
import React from 'react'
import UserSays from '@/Components/UI/UserSays/UserSays'
import ClientSays from '@/Components/HomePage/ClientSays/ClientSays'
import { SwiperSlide } from 'swiper/react'
import Slider from '@/Components/UI/Swiper/Swipper'
import ContactUs from '@/Components/UI/ContactUs/ContactUs'
import Button from '@/Components/UI/Button/Button'
import TestimonialPopUp from '@/Components/UI/TestimonialPopUp/TestimonialPopUp';
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useQueryFetch } from '@/hooks/useFetchData'

export default function page() {

    const [popUp, setPopUp] = React.useState(false)

    //TestimonialPopUp

    const token = Cookies.get('auth_token');

    const router = useRouter();

    // console.log('????????????????????????????????????token', token);
    const testimonialsList = useQueryFetch('testimonials').fetchedData
    console.log(testimonialsList, '000000000000000')



    return (

        <Grid container bgcolor={BG_COLOUR} sx={{ height: '100%', pb: 1 }}>




            {popUp && <TestimonialPopUp setPopUp={setPopUp} popUp={popUp} />}

            <Grid container>

                <Header />

                <MobileHeader />

                <Grid container sx={{
                    mt: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'transparent'
                }}>

                    <Grid container xs={6} lg={3.5} sx={{
                        bgcolor: PRIMARY_COLOUR,
                        position: 'fixed',
                        right: 0,
                        top: 0,
                        height: '100%'
                    }}>

                    </Grid>

                    <Grid container lg={12} sx={{
                        bgcolor: 'transparent', alignItems: 'center',
                        mt: 1
                    }}>

                        <Box
                            component='img'
                            src=' Assets/Icons/Dumbbell (1).png'
                            sx={{
                                width: 80,
                                bgcolor: 'transparent'
                            }}
                        />

                        <Box sx={{
                            width: { xs: '40%', lg: '30%', },
                            ml: { xs: 5, lg: 30 },
                            zIndex: 100,
                            bgcolor: 'transparent'
                        }}>
                            <H4 textAlign='start' fontWeight='bold'>Our Client Says</H4>
                        </Box>

                    </Grid>

                    <Grid container
                        className={Styles.scrolling}
                        sx={{
                            height: { sm: '60vh', md: '70vh', lg: '72vh' }, zIndex: 20, justifyContent: 'center', alignItems: 'center'
                        }}>

                        {
                            //  [1, 2, 3, 4, 5, 6, 6]
                            testimonialsList?.map((_data: any, index: React.Key | null | undefined) =>

                                <Grid container key={index} xs={10} lg={9.5} sx={{ bgcolor: '#ffff', mt: 3 }}>

                                    <Grid container sx={{
                                        mt: { xs: 1, lg: 1 },
                                        bgcolor: 'transparent'

                                    }}>


                                        <Grid container bgcolor='' lg={2} sx={{
                                            justifyContent: 'center', alignItems: 'center',
                                            bgcolor: 'transparent'
                                        }} >
                                            <Avatar alt="Remy Sharp"
                                                sx={{
                                                    height: { xs: 80, lg: 120 },
                                                    width: { xs: 80, lg: 120 }
                                                }}
                                                // src="data:image/jpeg;base64,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"
                                                src={_data?.client?.image != null ? _data.client.image :
                                                    "data:image/jpeg;base64,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"
                                                }
                                            />
                                        </Grid>



                                        <Grid container bgcolor='' lg={7} sx={{
                                            alignItems: 'center',
                                            bgcolor: 'transparent'
                                        }}>

                                            <Box sx={{
                                                width: '100%',
                                                alignItems: 'center',
                                                bgcolor: 'transparent'
                                            }}>

                                                <Box
                                                    component='img'
                                                    src='Assets/Icons/invertarcomma.png'
                                                    sx={{
                                                        height: { xs: 15, lg: 14 },
                                                        width: { xs: 15, lg: 14 },
                                                        m: 1,
                                                        ml: { xs: 5, sm: '', md: '', lg: '' },
                                                        bgcolor: 'transparent'
                                                    }}
                                                />

                                                <Box sx={{
                                                    // ml: 3,
                                                    bgcolor: 'transparent',

                                                }}>
                                                    <Box sx={{
                                                        bgcolor: 'transparent',
                                                        ml: 7
                                                    }}>


                                                        <Typography sx={{
                                                            fontSize: { xs: 17, lg: 19 },
                                                            bgcolor: 'transparent', fontWeight: 'bold', fontFamily: 'Oxygen',
                                                            letterSpacing: 1.5
                                                        }}>{_data?.client?.firstName + ' ' + _data?.client?.lastName}</Typography>


                                                    </Box>


                                                    <Typography sx={{
                                                        ml: 7,
                                                        py: { xs: 0.5, md: 2 },
                                                        fontWeight: 'bold',
                                                        textAlign: { xs: 'center', md: 'center', lg: 'start' },
                                                        bgcolor: 'transparent',
                                                        fontSize: { xs: 15, lg: 15 },
                                                        width: { sm: '90%', md: '90%', lg: '85%' }, fontFamily: 'Oxygen',
                                                        letterSpacing: 1.3,
                                                    }}>
                                                        {_data.message}
                                                    </Typography>

                                                </Box>
                                            </Box>

                                        </Grid>


                                        <Grid container bgcolor='' lg={3} sx={{
                                            justifyContent: 'center', alignItems: 'center',
                                            bgcolor: 'transparent'
                                        }}>

                                            <Box
                                                component='img'
                                                src={_data.image}
                                                sx={{
                                                    height: { xs: 100, lg: 200 },
                                                    width: { xs: 100, lg: 200 },
                                                    m: { xs: 1, lg: 3 }
                                                }}
                                            />

                                        </Grid>

                                    </Grid>

                                </Grid>

                            )
                        }

                    </Grid>

                </Grid>
                {/* 
                <Grid container sx={{
                    justifyContent: 'center',
                    my: { xs: 2.5, sm: 2, md: 3, lg: 3 }, zIndex: 10, bgcolor: 'transparent'
                }}>

                    <Button bgcolor='white' onClick={token == undefined ? () => router.push('/login') : () => setPopUp(!popUp)} >  Add your </Button>

                </Grid> */}


















                <Grid container sx={{
                    zIndex: 100,

                }}>
                    <ContactUs />
                </Grid>


            </Grid>























        </Grid >
    )
}
