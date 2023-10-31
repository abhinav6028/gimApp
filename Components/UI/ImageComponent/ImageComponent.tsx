import { Grid, Box } from '@mui/material'
import React from 'react'

export default function ImageComponent(src: any) {
    return (
        <Grid container alignItems='center' xs={10} md={12} sx={{
            justifyContent: { xs: 'center', md: 'center', lg: 'center' },
            bgcolor: 'transparent'
        }} >
            <Box
                component='img'
                src='Assets/Home/categoryimage.png'
                sx={{
                    width: { xs: 280, sm: 430, md: 360, lg: 550 },
                    height: { xs: 180, sm: 270, md: 260, lg: 340 },

                }}
            />
        </Grid>
    )
}
