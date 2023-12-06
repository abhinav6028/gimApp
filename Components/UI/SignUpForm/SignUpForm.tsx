import { Grid, Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { H4 } from '../Typography/Typography';
import CustomeTextField from '../CustomeTextField/CustomeTextField';
import { useFormik } from 'formik';
import axios from 'axios';
import { BASE_URL } from '@/utils/urls';
import CustomeDropDown from '../CustomeDropDown/CustomeDropDown';
import Button from '../Button/Button';
import { message } from 'antd';
import GoogleAuthButton from '../../GoogleAuthButton/GoogleAuthButton';
import { red } from '@mui/material/colors';

// export default function SignUpForm(props: any) {
export default function SignUpForm(props) {
    const { check, setCheck, clientData, setClientData } = props
    console.log(clientData, 'client Data')

    const [gender, setGender] = React.useState('');

    const router = useRouter()

    const formik = useFormik({

        initialValues: {
            firstName: "",
            lastName: "",
            username: "",
            dateOfBirth: "",
            address: "",
            place: "",
            city: "",
            state: "",
            gender: "",
            mobile: "",
            whatsApp: "",
            email: "",
            password: "",
            confirmPassword: "",

        },
        validate: (values) => {
            let errors = {};
            if (!values.confirmPassword) {
                errors.confirmPassword = 'confirm password is required'
            } else if (values.password != values.confirmPassword) {
                errors.confirmPassword = 'confirm password is not matched'
            }

            return errors
        },

        onSubmit: (values) => {
            console.log(values, '?????????????????????')
            axios.post(`${BASE_URL}client`,
                {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    username: values.username,
                    dateOfBirth: null,
                    address: values.address,
                    place: values.place,
                    city: values.city,
                    state: values.state,
                    // gender: gender,
                    mobile: values.mobile,
                    whatsApp: values.whatsApp,
                    email: values.email,
                    password: values.password,

                }
            ).then((res) => {

                // console.log("????????????????????????????/////", res.data.result.success);


                // -cookies.set('auth_token', res.data.accessTocken)
                console.log("result", res);



                if (res.data.success) {

                    setCheck(!check)

                    setClientData(res.data)

                    // axios.post(`${BASE_URL}otp/mobile`,
                    //     {
                    //         mobile: res.data.result.mobile
                    //         // "mobile": "8129887972"
                    //     }
                    // ).then((res) => {
                    //     console.log(res, "////////////////////////");
                    // })


                    axios.post(`${BASE_URL}otp/email`,
                        {
                            subject: "otp to verify email",
                            email: res.data.result.email
                        }
                    ).then((res) => {
                        console.log("////////////////////////", res);
                        if (res.data.success) {
                            message.success(`Otp sent to your email`)
                        }
                    }).catch((err) => {
                        console.log(err, ';;;;;;;;;;;;;')
                    })

                }
                else {
                    message.error(res.data.message)
                }

            })

        },

    })


    const formItems = [
        {
            fieldName: "First Name",
            id: 'firstName',
            type: 'text',
            inputType: "text",
            required: true
        },
        {
            fieldName: "Last Name",
            id: 'lastName',
            type: 'text',
            inputType: "text",
            // required:''
        },
        {
            fieldName: "dateOfBirth",
            id: 'dateOfBirth',
            type: 'date',
            inputType: "text"
        },
        {
            fieldName: "User Name",
            id: 'username',
            type: 'text',
            inputType: "text",
            required: true
        },
        {
            fieldName: "Mobile ",
            id: 'mobile',
            type: 'number',
            inputType: "text",
            required: true

        },
        {
            fieldName: "Watsap number ",
            id: 'whatsApp',
            type: 'number',
            inputType: "text"
        },
        // {
        //     fieldName: "Gender",
        //     id: 'gender',
        //     type: 'dropDown',
        //     inputType: "dropDown"
        // },
        {
            fieldName: "Email",
            id: 'email',
            type: 'email',
            inputType: "text",
            required: true
        },
        {
            fieldName: "State",
            id: 'state',
            type: 'text',
            inputType: "text"
        },
        {
            fieldName: "City",
            id: 'city',
            type: 'text',
            inputType: "text"
        },
        {
            fieldName: "Place",
            id: 'place',
            type: 'text',
            inputType: "text"
        },
        {
            fieldName: "Password",
            id: 'password',
            type: 'password',
            inputType: "text",
            required: true
        },
        {
            fieldName: "Confirm Password",
            id: 'confirmPassword',
            type: 'password',
            inputType: "text",
            required: true
        },


    ]
    const optionalFields = [{

    }]

    console.log("selectedValue/////////////////////////////", gender);

    return (
        <Grid container lg={7} sx={{}}>

            <Grid container bgcolor='' sx={{ height: 'fit-content', bgcolor: '' }}>
                <Box
                    component='img'
                    src='Assets/Icons/Multiply.png'
                    onClick={() => router.back()}
                    // onClick={() => router.back()}
                    sx={{
                        width: { xs: 35, sm: 35, lg: 28 },
                        height: { xs: 35, sm: 35, lg: 28 },
                        cursor: 'pointer',
                        m: 1
                    }}
                />

            </Grid>

            <Grid container lg={6} sx={{
                justifyContent: 'center', alignItems: 'center', bgcolor: '',
                position: 'absolute',
                height: '80%',
                top: { xs: 30, lg: 30 },

            }}>

                <Grid container xs={10} md={10} lg={10} bgcolor='' sx={{
                    alignItems: 'center',
                    justifyContent: '',
                    bgcolor: '',

                }}>
                    <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>

                        <GoogleAuthButton />

                    </Grid>
                    <hr color='black' style={{ marginTop: '50px', width: '100%' }} />
                    <H4 textAlign='start' fontWeight='bold' >SIGN UP</H4>

                    <form style={{ width: '100%', background: '' }} onSubmit={formik.handleSubmit} >

                        <Grid container bgcolor='' sx={{

                            justifyContent: { xs: 'center', sm: 'center', md: '', lg: '' }
                        }}>

                            {
                                formItems.map((data: any, index: any) => {
                                    // formItems.map((data, index) => {

                                    switch (data.inputType) {
                                        case 'text':
                                            return (
                                                <>
                                                    <CustomeTextField data={data} formik={formik} fieldWidth='80%' required={data.required ? true : false} />
                                                    {formik.touched[data.id] && formik.errors[data.id] && (
                                                        <span style={{ color: 'red' }}>{formik.errors[data.id]}</span>
                                                    )}
                                                </>

                                            )
                                            break;
                                        case 'dropDown':
                                            return (
                                                <CustomeDropDown gender={gender} setGender={setGender} fieldWidth='80%' />
                                            )
                                            break;
                                    }
                                }
                                )

                            }

                            <Grid container sx={{
                                mt: { xs: 1, sm: 1, md: 2, lg: 3 }
                            }}>

                                <Grid container lg={11} bgcolor='' sx={{ justifyContent: 'center' }}>

                                    <Button width='90%' btnType='submit' >SIGN UP</Button>

                                    {/* <GoogleAuthButton /> */}
                                </Grid>

                            </Grid>

                        </Grid>

                    </form>

                    <Box sx={{
                        width: { xs: '100%', lg: '94%' },
                        height: '0.5px',
                        bgcolor: 'black',
                        mt: { xs: 5, md: 3 }
                    }} />

                    <Grid container sx={{
                        mt: { xs: 1, sm: 1, md: 2, lg: 1.5 }
                    }}>

                        <Grid container lg={11} bgcolor='' sx={{ justifyContent: 'center' }}>

                            <Typography sx={{
                                fontSize: 11,
                                fontWeight: 'bold',

                            }}>Already have an account?

                                <span>sign Up</span>

                            </Typography>

                        </Grid>

                    </Grid>

                </Grid>

            </Grid >

        </Grid >
    )
}
