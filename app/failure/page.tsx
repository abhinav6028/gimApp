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
        //     <H2>PAYMENT FAILED</H2>
        //     <p>Something went wrong, Please try again after sometime</p>
        //     <button style={{
        //         paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px',
        //         fontSize: '20px', cursor: 'pointer', backgroundColor: PRIMARY_COLOUR, color: 'white', fontWeight: 'bold'
        //     }} onClick={() => router.push('/subscription')}>Try again</button>
        // </Grid>

        <div className="container" style={{ lineHeight: '50px' }}>
            <div className="icon" style={{ background: 'none' }}>&#10008;</div>
            <h1>Payment Failed</h1>
            <div style={{ textAlign: 'left', background: 'none' }}>

                <p>We're sorry, but there was an issue processing your subscription payment.</p>
                <p>Please check the following:</p>
                <ul>
                    <li>Ensure your payment information is correct</li>
                    <li>Verify that your account has sufficient funds</li>
                </ul>
            </div>
            <a href="/subscription" className="button" style={{ lineHeight: '30px' }}>Try Again</a>
        </div>

    )
}

export default page