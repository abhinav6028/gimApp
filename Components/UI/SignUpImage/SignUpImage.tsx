import { Grid } from '@mui/material'
import React from 'react'

export default function SignUpImage() {
    return (
        <Grid container md={4.5}
            component='img'
            src='Assets/images/aesthetics-training-diet-program.png'
            // src='Assets/loginPageImg.png'
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                // ml: 'auto',
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
                position: 'absolute',
                right: 0
            }}

        />

    )
}
