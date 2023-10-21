import React from 'react';
import { Typography } from "@mui/material"

export const H1 = (props: any) => {

    const { fontWeight, ml, cursor, hover, color, } = props;

    return (
        <Typography sx={{
            fontSize: { xs: 60, sm: 100, md: 130, lg: 150 },
            width: 'fit-content', cursor: cursor,
            fontFamily: 'Outfit',
            fontWeight: hover ? '' : fontWeight, color: color, bgcolor: '', height: 'fit-content', ml: ml
        }}> {props.children}</Typography >
    )
}

export const H2 = (props: any) => {

    const { fontWeight, ml, mr, mt, cursor, hover, colour } = props;

    return (
        <Typography sx={{

            fontSize: { xs: 50, sm: 90, md: 120 },
            width: 'fit-content', mr: mr, cursor: cursor, fontWeight: 'bold', ml: ml, mb: 5, height: 'fit-content',
            mt: { xs: mt - (-8), sm: mt - (-5), md: mt },
            color: '#ffff', fontFamily: 'Outfit',

            // fontFamily:'Outfit'
            // bgcolor:'green'

        }}> {props.children}</Typography >
    )
}





export const H4 = (props: any) => {

    const { m, mt, mb, ml, mr, mx, my, p, pt, pb, pl, pr, px, py, fontWeight, cursor, width, textAlign, fontFamily } = props

    return (
        <Typography sx={{
            fontSize: { xs: 20, sm: 27, md: 30, lg: 33 },
            fontWeight: fontWeight, cursor: cursor,
            width: width ? width : '100%',
            textAlign: { xs: 'center', lg: textAlign ? textAlign : 'center' },
            bgcolor: 'transparent', fontFamily: fontFamily, background: ''
        }}>{props.children}</Typography>
    )
}






export const H5 = (props: any) => {

    const { m, mt, mb, ml, mr, mx, my, p, pt, pb, pl, pr, px, py, fontWeight, cursor, width, color, textAlign, fontFamily, letterSpacing } = props

    return (
        <Typography sx={{
            fontSize: { xs: 14, sm: 18, md: 18 },
            fontWeight: fontWeight, cursor: cursor,
            width: width ? width : '100%', mt: mt,
            textAlign: { xs: 'center', lg: textAlign ? textAlign : 'center' },
            my: 0.5, color: color, bgcolor: 'transparent', fontFamily: fontFamily,
            letterSpacing: letterSpacing ? letterSpacing : ''
        }}>{props.children}</Typography>
    )
}
