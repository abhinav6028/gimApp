import { PRIMARY_COLOUR } from '@/utils/colours'
import { Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

function Footer() {
    const router = useRouter()
    return (
        <Grid sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', padding: 10, backgroundColor: PRIMARY_COLOUR }}>
            <div style={{ backgroundColor: PRIMARY_COLOUR }}>

                <p onClick={() => router.push('privacy-policy')} style={{ marginBottom: '10px', cursor: 'pointer', background: 'transparent' }}>Privacy Policy</p>
                <p onClick={() => router.push('terms-and-conditions')} style={{ marginBottom: '10px', cursor: 'pointer', background: 'transparent' }}>Terms and conditions</p>
                <p style={{ marginTop: 35, background: 'transparent' }}>By JnK Infotainment</p>
            </div>
            <div style={{ backgroundColor: PRIMARY_COLOUR }}>

                <p onClick={() => router.push('refund-and-return-policy')} style={{ marginBottom: '10px', cursor: 'pointer', background: 'transparent' }}>Return and Refund Policy</p>
                <p onClick={() => router.push('shipping-policy')} style={{ marginBottom: '10px', cursor: 'pointer', background: 'transparent' }}>Shipping</p>
            </div>

        </Grid>
    )
}

export default Footer