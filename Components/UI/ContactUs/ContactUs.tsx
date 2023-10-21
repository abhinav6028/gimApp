import React from 'react';
import { Box, Grid, Typography } from '@mui/material'
import Button from '../Button/Button';
import { H4, H5 } from '../Typography/Typography';
import Styles from '../../../Styles/contactus.module.css'


export default function ContactUs() {

    const Icons = [
        {
            url: '',
            path: 'Assets/Icons/YouTube.png'
        },
        {
            url: '',
            path: 'Assets/Icons/Instagram.png'
        },
        {
            url: '',
            path: 'Assets/Icons/Facebook.png'
        },
    ]

    return (

        <Grid container sx={{
            mt: { xs: 2 }
        }}>

            <Grid container md={5.5} sx={{
                display: { xs: 'none', md: 'flex' },
                height: 800,
                // bgcolor: 'red'
            }}>

                <Box
                    component='img'
                    src='Assets/Home/contact-us.png'
                    sx={{
                        width: "100%",
                        height: '100%'
                    }}
                />

            </Grid>

            <Grid container md={6} sx={{ bgcolor: '', justifyContent: 'center' }}>

                <Grid container lg={10} sx={{
                    mt: { lg: 10 },
                    height: 'fit-content'
                }}>

                    <Grid container sx={{
                        justifyContent: { xs: 'center', sm: 'center', mf: 'start', lg: 'start' }
                    }}>
                        <H4 textAlign='start' fontWeight='800' fontFamily="Outfit">Contact Us</H4>
                        <H5 textAlign='start' fontFamily="Oxygen" color='grey'>Feel free to connect with us</H5>
                    </Grid>




                    <Grid container sx={{
                        my: { xs: 1, lg: 4 },
                        justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: 'start' }

                    }}>
                        <Box>
                            <H5 fontFamily='Oxygen' color='grey'>Email</H5>
                        </Box>

                        <Box sx={{
                            ml: { xs: 2, lg: 15 }
                        }}>
                            <H5 fontFamily='Oxygen' color='grey'>email@gmail.com</H5>
                        </Box>

                    </Grid>

                    <Grid container sx={{
                        justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: 'start' }
                    }}  >

                        <Typography sx={{
                            fontSize: { xs: 20, sm: 20, md: 28 }, fontFamily: 'Outfit',
                            mt: { xs: 1.5, sm: 0, md: 0, lg: 0 }
                        }}>
                            Message for enquries
                        </Typography>

                    </Grid>

                    <Grid container sx={{
                        justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: 'start' }
                    }}>
                        <Grid container xs={10} sm={9} md={10} lg={9} sx={{
                            justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: 'start' }
                        }}>

                            <Box sx={{
                                width: '90%',
                                height: { xs: 35, sm: 60, lg: 50 },
                                my: { xs: 1.3, sm: 2, md: 1 },
                            }}>

                                <input type="text"
                                    name="email"
                                    placeholder='EMAIL'
                                    className={Styles.input_lable}
                                />

                            </Box>

                            <Box sx={{
                                width: '90%',
                                height: { xs: 35, sm: 60, lg: 50 },
                                my: { xs: 1.3, sm: 2, md: 1 },
                            }}>

                                <input type="text"
                                    name="email"
                                    placeholder='EMAIL'
                                    className={Styles.input_lable}
                                />

                            </Box>

                            <Box sx={{
                                width: '90%',
                                height: { xs: 100, sm: 110, lg: 130 },
                                my: { xs: 1.8, sm: 2, md: 0, lg: 1 }
                            }}>

                                <textarea

                                    id="w3review"
                                    name="w3review"
                                    rows={4}
                                    cols={50}
                                    className={Styles.input_lable}
                                    placeholder='MESSAGE'

                                />

                            </Box>


                            <Box sx={{ width: '90%', my: 2 }}>

                                <Button ml="auto" bgcolor='#FFFFFF'
                                    hoverColour="transparent" hoverBorderRadius='7'
                                > SEND </Button>

                            </Box>

                        </Grid>
                    </Grid>

                    <Grid container sx={{
                        justifyContent: { xs: 'center', sm: 'center', md: 'start', lg: 'start' }
                    }}>
                        <H5 fontWeight='bold' textAlign='start' fontFamily='Outfit'> Follow Us</H5>

                        <Grid container xs={5} lg={4} sx={{
                            bgcolor: '', justifyContent: 'space-between', my: 2
                        }}>

                            {
                                Icons.map((data, index) =>

                                    <Box
                                        component='img'
                                        src={data.path}
                                        sx={{
                                            height: 30,
                                            width: 30, cursor: 'pointer'
                                        }}
                                    />

                                )
                            }

                        </Grid>

                    </Grid>

                </Grid>

            </Grid>

        </Grid >

    )
}
