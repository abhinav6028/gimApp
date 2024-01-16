"use client"

import { H2 } from '@/Components/UI/Typography/Typography'
import { Grid } from '@mui/material'
import React from 'react'
import { PRIMARY_COLOUR } from '@/utils/colours'
import { useRouter } from 'next/navigation'
import './page.css'

function page() {
    const router = useRouter()
    return (
        // <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        //     <H2>PAYMENT SUCCESS</H2>
        //     <button style={{
        //         paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px',
        //         fontSize: '20px', cursor: 'pointer', backgroundColor: PRIMARY_COLOUR, color: 'white', fontWeight: 'bold'
        //     }} onClick={() => router.push('/videos')}>Start Your Workout Now</button>
        // </Grid>
        // <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div className="container" style={{ lineHeight: '50px', }}>
            <div className="icon" style={{ background: 'none' }}>&#10004;</div>
            <h1>Payment Successfull!</h1>
            <div style={{ textAlign: 'left', background: 'none' }}>
                <p>Your subscription payment has been processed successfully.</p>
                <p>Thank you for choosing our service. You now have access to premium features.</p>
                <p>An email with the payment receipt and subscription details has been sent to your registered email address.</p>
            </div>
            <a href="/videos" className="button" style={{ lineHeight: '30px' }}>Go to Workout</a>
        </div>
        // </div>
    )
}

export default page