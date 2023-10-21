"use client"
import { Grid } from '@mui/material'
import React from 'react';
import ReactPlayer from 'react-player';

export default function page() {
    return (
        <Grid container sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', bgcolor: 'red  '
        }}>
            <video width="320" height="240" autoPlay>

                <source src="https://www.youtube.com/watch?v=GnwoXZOgkac" type="video/mp4" />

            </video>

        </Grid>
    )
}




