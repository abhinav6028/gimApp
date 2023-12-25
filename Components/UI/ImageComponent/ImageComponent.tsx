import { Grid, Box } from '@mui/material'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

export default function ImageComponent() {
    const pathName = usePathname()
    console.log(pathName)
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
                    opacity: pathName === '/videos' ? '70%' : null,
                    position: 'relative'
                }}
            />
            {pathName === '/videos' ?
                <FontAwesomeIcon icon={faPlay} style={{ position: 'absolute', fontSize: '80px', color: 'white', background: 'none', cursor: 'pointer', transition: 'transform 0.3s ease-in-out' }} />
                : null}

        </Grid>
    )
}
