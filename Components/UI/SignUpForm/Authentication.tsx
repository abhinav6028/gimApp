import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { H4 } from '../Typography/Typography';
import Button from '../Button/Button';
import CustomeTextField from '../CustomeTextField/CustomeTextField';
import { useFormik } from 'formik';
import axios from 'axios';
import { BASE_URL } from '@/utils/urls';
import Cookies from 'js-cookie';
import { message } from 'antd';


export default function Authentication(props: any) {

    const { clientData, check, setCheck } = props

    const router = useRouter();

    const [buttonDisplay, setButtonDisplay] = React.useState(false)

    const [buttonDisplay2, setButtonDisplay2] = React.useState(false)

    const token = Cookies.get('auth_token')

    // console.log("token", token);


    const formik = useFormik({

        initialValues: {
            type: "",
            to: "",
            otp: ""
        },

        onSubmit: (values) => {

            axios.post(`${BASE_URL}otp/varify`,

                {
                    type: "email",
                    to: clientData.result.email,
                    otp: values.otp
                }

            ).then((res) => {

                if (res.data.success) {
                    message.success('Otp verified successfully')
                    Cookies.set('auth_token', clientData.accessTocken)
                    router.back()


                }
            })

        },

    })




    const formItems = [
        {
            fieldName: "Enter Email OTP",
            id: 'otp',
            type: 'number',
            inputType: "text"
        }
    ]

    return (
        <Grid container lg={7} sx={{}}>


            <Grid container bgcolor='' sx={{ height: 'fit-content', bgcolor: '' }}>
                <Box
                    component='img'
                    src='Assets/Icons/Multiply.png'
                    // onClick={setCheck(!check)}
                    sx={{
                        width: { xs: 35, lg: 42 },
                        height: { xs: 35, sm: 42, lg: 42 },
                        mt: { lg: 50 },
                        cursor: 'pointer'
                    }}
                />
            </Grid>



            <Grid container lg={6} sx={{
                justifyContent: 'center', alignItems: 'center', bgcolor: '',
                position: 'absolute',
                height: '80%',
                top: { xs: 100, lg: 70 },

            }}>

                <Grid container xs={10} md={6} lg={7.5} bgcolor='' sx={{
                    alignItems: 'center',
                    justifyContent: ''
                }}>

                    <H4 textAlign='start' fontWeight='bold'>Authentication required</H4>

                    <Typography sx={{
                        fontSize: 14,
                        fontWeight: 600,
                        mt: 1,
                        bgcolor: 'transparent',
                        width: '80%'
                    }}>IN +91{clientData.result.mobile} </Typography>

                    <Typography sx={{
                        fontSize: 13,
                        fontWeight: '',
                        mt: 1,
                        bgcolor: 'transparent',
                        width: { xs: '80%', lg: '70%' }
                    }}>We’ve sent a One Time Password (OTP) to the mobile
                        number above. Please enter it to complete verification </Typography>

                    <Grid container sx={{ bgcolor: 'red' }}>

                        <form action="" style={{ width: '100%' }} onSubmit={formik.handleSubmit} >

                            <Grid container >

                                {
                                    formItems.map((data, index) =>

                                        <CustomeTextField data={data} formik={formik} buttonDisplay2={buttonDisplay2} setButtonDisplay2={setButtonDisplay2} lg={10} />

                                    )
                                }

                                <Box sx={{
                                    width: { xs: '100%', lg: '80%' },
                                    my: 1.8,
                                    // display: buttonDisplay ? 'flex' : 'none'
                                }}>

                                    <Button btnType='submit' width='100%' borderRadius='10px'>VERIFY</Button>

                                </Box>

                            </Grid>

                        </form>

                    </Grid>


                    {/* 
                    <Box sx={{
                        width: { xs: '100%', lg: '80%' },
                        mt: 3
                    }}>

                        <Button
                            // onClick={() => setCheck(!check)}
                            width='100%' borderRadius='10px'>Continue</Button>

                    </Box> */}

                    {/* <Grid sx={{
                        width: { xs: '100%', lg: '80%' },
                        mt: 2, bgcolor: ''
                    }}>
                        <Typography sx={{
                            color: "#21A4EE", textAlign: 'center', fontSize: 14
                        }}> Resent OTP</Typography>
                    </Grid> */}

                    {/* <Box sx={{
                        width: { xs: '100%', lg: '80%' },
                        height: '0.6px',
                        bgcolor: 'black',
                        mt: { xs: 5, md: 2 }
                    }} /> */}

                </Grid>

            </Grid >

        </Grid >
    )
}


{/* <Grid container sx={{
                        mt: {
                            xs: 2,
                            lg: 3
                        }
                    }}>

                        <form action="" style={{ width: '100%' }}>

                            <Grid container sx={{ bgcolor: '' }}>

                                {
                                    formItems.map((data, index) =>

                                        <CustomeTextField data={data} formik={formik} fieldWidth='100%' buttonDisplay={buttonDisplay} setButtonDisplay={setButtonDisplay} lg={10} />

                                    )
                                }

                                <Box sx={{
                                    width: { xs: '100%', lg: '80%' },
                                    my: 1.8,
                                    // display: buttonDisplay ? 'flex' : 'none'
                                }}>

                                    <Button width='100%' borderRadius='10px'>VERIFY</Button>

                                </Box>

                            </Grid>

                        </form>

                    </Grid> */}