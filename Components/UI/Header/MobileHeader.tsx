"use client"

import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import router from 'next/router'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { BG_COLOUR } from '@/utils/colours'
import Button from '../Button/Button'
import Cookies from 'js-cookie';
import { useQueryFetchByHeaders } from '@/hooks/useFetchData'
import { signOut } from 'next-auth/react'

export default function MobileHeader() {

  const [menu, setMenu] = React.useState(false)
  const token = Cookies.get('auth_token')
  const router = useRouter();
  const { fetchedData: fetchedData } = useQueryFetchByHeaders('auth/profile')

  const navbarItems = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Videos',
      path: '/videos'
    },
    {
      name: 'Testimonials',
      path: '/testimonials'
    },
    {
      name: 'Contact Us',
      path: '/testimonials'
    }
  ]


  const MenuBar = () => {

    setMenu(!menu)

  }


  const logout = async () => {
    await signOut(),
      Cookies.remove('auth_token'),
      window.location.reload()
  }


  return (

    <Grid container sx={{
      display: { xs: "block", md: "none" },

    }}>

      <Box sx={{
        width: "100%", display: 'flex',
        justifyContent: "center", alignItems: "center",
        py: 1,
        position: "fixed",
        zIndex: "110", top: "0", left: "0",
        bgcolor: BG_COLOUR
        // bgcolor: { xs: 'red', sm: 'blue', md: 'green', lg: 'pink', }
      }} >

        <Box position="fixed" left="0" sx={{
          bgcolor: BG_COLOUR
        }}>

          {menu ? <CloseIcon sx={{ ml: 2, color: "#513328", fontSize: { xs: '2rem' } }} onClick={() => setMenu(!menu)} /> :
            <MenuIcon sx={{ ml: 2, color: "#513328", fontSize: "2rem" }} onClick={() => setMenu(!menu)} />}

        </Box>

        <Box

          // onClick={() => router.push('/')}
          // style={{ cursor: 'pointer' }}
          component="img"
          sx={{
            bgcolor: BG_COLOUR,
            // pt: 1,
            pb: 1,
            height: 50,
            width: 100,
            maxHeight: { xs: 30, sm: 40 },
            maxWidth: { xs: 80, md: 90 },
          }}
          alt="The house from the offer."
          src="/Assets/Final.png"
        />

      </Box>

      <Box sx={{
        transition: "0.5s",
        width: "100%", height: "fit-content",
        position: "fixed", zIndex: "100", left: "0%", top: menu ? "50px" : "-40%",
        bgcolor: BG_COLOUR
        // bgcolor: "red"

      }}>

        {
          navbarItems.map((data: any, index: any) =>

            <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, bgcolor: BG_COLOUR }}>

              <Box onClick={MenuBar} sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: 'red', }}>

                <Typography sx={{ color: "black", fontWeight: '550', cursor: 'pointer' }} onClick={() => router.push(data.path)}>{data.name}</Typography>

              </Box>

            </Box>
          )}


        {/* <Button onClick={() => router.push('/signup')} ml={1.5} >Sign Up</Button>

        <Button onClick={() => router.push('/login')} mt={1.5} ml={1.5}>Log In</Button> */}

        <Box sx={{ display: token ? 'none' : 'block', justifyContent: 'space-between', padding: '15px', paddingBottom: '25px', }}>

          <Button onClick={() => { router.push('/signup') }} btnName='signup' mr={3}>Sign Up</Button>

          <Button mr={5} mt={2} onClick={() => router.push('/login')} btnName='login' >Log In</Button>

        </Box>

        <Box sx={{ display: token ? 'block' : 'none', padding: '15px', paddingBottom: '25px', justifyContent: 'space-between' }}>

          <Button onClick={() => router.push('/subscription')} display={fetchedData?.IsActive && 'none'} >Subscribe</Button>

          <Button mt={1} onClick={logout}>Log Out</Button>

        </Box>
      </Box>

    </Grid >
  )
}