import { Box } from '@mui/material'
import React from 'react'

export default function Dumbel() {
    return (
        <Box
            component='img'
            src='Assets/Icons/Dumbbell (1).png'
            sx={{
                bgcolor: 'transparent',
                width: { md: 90, lg: 100 },
                height: { md: 90, lg: 100 }
            }}
        />
    )
}
