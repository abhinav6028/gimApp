"use client"

import { H2 } from '@/Components/UI/Typography/Typography'
import { Grid } from '@mui/material'
import React from 'react'
import { PRIMARY_COLOUR } from '@/utils/colours'
import { useRouter } from 'next/navigation'

function page() {
    const router = useRouter()
    return (
        <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <H2>PAYMENT FAILED</H2>
            <p>Something went wrong, Please try again after sometime</p>
            <button style={{
                paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px',
                fontSize: '20px', cursor: 'pointer', backgroundColor: PRIMARY_COLOUR, color: 'white', fontWeight: 'bold'
            }} onClick={() => router.push('/subscription')}>Try again</button>
        </Grid>
    )
}

export default page