import React from 'react'
import { Grid, Box } from '@mui/material'
import { PRIMARY_COLOUR } from '@/utils/colours'
import { H5 } from '../Typography/Typography'


export default function Button(props: any) {

  const { ml, mr, mt, pt, my, width, onClick, borderRadius, bgcolor, hoverColour, fontFamily, letterSpacing, submit, display } = props

  return (


    <Box
      sx={{
        bgcolor: bgcolor ? bgcolor : PRIMARY_COLOUR,
        borderRadius: borderRadius ? borderRadius : '5px',
        height: { xs: 35, sm: 40, md: 45 },
        width: width ? width : { xs: 110, sm: 140, md: 162 },
        display: 'flex', justifyContent: 'center', alignItems: 'center', ml: ml,
        mr: { xs: mr - 3, lg: mr },
        cursor: 'pointer', mt: mt, pt: pt, my: my,
        border: `2px solid ${PRIMARY_COLOUR}`,
        '&:hover': {
          background: hoverColour,
          border: `4px solid ${PRIMARY_COLOUR}`,
          borderRadius: 3,
          transition: '0.2s'
        }
      }}>

      <button type='submit' onClick={onClick} style={{
        width: '100%', height: '100%', backgroundColor: 'transparent', border: 'none', outline: 'none', cursor: 'pointer', display: display
      }}>

        <H5 fontWeight='bold' fontFamily={fontFamily} letterSpacing={letterSpacing} >{props.children}</H5>

      </button>


    </Box>

  )
}
