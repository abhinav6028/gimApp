"use client"
import Button from '@/Components/UI/Button/Button';
import CustomeTextField from '@/Components/UI/CustomeTextField/CustomeTextField';
import SignUpImage from '@/Components/UI/SignUpImage/SignUpImage';
import { H4 } from '@/Components/UI/Typography/Typography';
import { BG_COLOUR } from '@/utils/colours';
import { BASE_URL } from '@/utils/urls';
import { Box, Grid } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import Cookies from 'js-cookie';

export default function page() {
    const router = useRouter()

    const formik = useFormik({

        initialValues: {
            UserName: "",
            Password: "",
        },

        onSubmit: (values) => {

            axios.post(`${BASE_URL}auth/login`,
                {
                    UserName: values.UserName,
                    Password: values.Password,
                }
            ).then((res) => {

                console.log('resssssssssssssssssssss', res.data.success);

                if (res.data.success) {
                    Cookies.set('auth_token', res.data.accessTocken)

                    router.back()
                }

            })

        }

    })

    const formItems = [
        {
            fieldName: "User Name ",
            id: 'UserName',
            type: 'text',
            inputType: "text"
        },
        {
            fieldName: "Password     ",
            id: 'Password',
            type: 'password',
            inputType: "text"
        }
    ]



    return (
        <Grid xs={10} container sx={{ bgcolor: BG_COLOUR }}>


            <Grid container lg={7} sx={{ bgcolor: BG_COLOUR, justifyContent: 'center' }}>

                <Box sx={{
                    bgcolor: '', height: 'fit-content', width: '100%',
                    mt: 15
                }}>

                    <Grid container bgcolor='' sx={{ justifyContent: 'center', alignItems: '' }}>

                        <H4 textAlign='center' fontWeight='' fontFamily='Oxygen'>LOG IN</H4>

                        <Grid container >
                            <form action="" onSubmit={formik.handleSubmit} style={{ width: '100%', justifyContent: 'center' }}>

                                <Grid container sx={{
                                    bgcolor: '', justifyContent: 'center',
                                    position: 'relative'

                                }}>

                                    <Grid container lg={6} sx={{
                                        justifyContent: 'center',
                                        // bgcolor: { xs: 'blue', sm: 'green', md: 'yellow', lg: 'red' },
                                        position: 'absolute',
                                        top: '50%',
                                        left: { xs: '10%', lg: '25%' },
                                        transform: 'translate (-50%,-50%)'

                                    }}>
                                        {
                                            formItems.map((data, index) =>

                                                <CustomeTextField data={data} formik={formik} lg={12}
                                                    justifyContent='center'
                                                    fieldHeight={50}
                                                />

                                            )
                                        }

                                            <Grid container xs={12} sm={12} md={7} lg={12} sx={{
                                                justifyContent: 'center', alignContent: 'center',
                                                mt: 2.5
                                            }}>
                                                <Button width='100%'>Log In</Button>

                                            </Grid>

                                        <Grid xs={12} sm={12} md={7} lg={12} container sx={{
                                            bgcolor: 'black',
                                            height: '1px',
                                            mt: 2
                                        }} />

                                        <Grid xs={12} sm={12} md={7} lg={12} container sx={{
                                            justifyContent: 'center', alignContent: 'center',
                                            mt: 2.5
                                        }}>

                                            <Button width='100%' onClick={() => router.push('/signup')}>Sign Up</Button>

                                        </Grid>

                                    </Grid>

                                </Grid>

                            </form>
                        </Grid>

                    </Grid>



                </Box>


            </Grid>

            <SignUpImage />


        </Grid>
    )
}
