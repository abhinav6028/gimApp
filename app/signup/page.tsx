"use client"
import { H4 } from '@/Components/UI/Typography/Typography'
import { BG_COLOUR } from '@/utils/colours'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/Components/UI/Header/Header';
import MobileHeader from '@/Components/UI/Header/MobileHeader';
import SignUpImage from '@/Components/UI/SignUpImage/SignUpImage';
import SignUpForm from '@/Components/UI/SignUpForm/SignUpForm';
import { log } from 'console';
import Authentication from '@/Components/UI/SignUpForm/Authentication';
// import SignUpFormm from '@/Components/UI/SignUpFormm/SignUpFormm';
import GoogleAuthButton from '@/Components/GoogleAuthButton/GoogleAuthButton';



export default function page() {

    const router = useRouter()

    const [check, setCheck] = React.useState(true);

    console.log("check?????????????????????", check);

    const [clientData, setClientData] = React.useState()

    // console.log("/////////////////////////////////clientData", clientData);




    return (

        <Grid container sx={{
            // bgcolor: BG_COLOUR,
            // mt: -5
        }}>

            <Grid container sx={{
                // mt: { xs: 8, lg: 8 },
                // bgcolor: BG_COLOUR
            }}>

                {
                    check ? <SignUpForm check={check}
                        setCheck={setCheck}
                        clientData={clientData}
                        setClientData={setClientData}
                    /> :
                        <Authentication clientData={clientData} check={check} setCheck={setCheck} />
                }

                <SignUpImage />

            </Grid>

        </Grid >

    )
}
