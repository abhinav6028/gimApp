"use client"
import HomePage from '@/Components/HomePage/HomePage'
import Header from '@/Components/UI/Header/Header'
import MobileHeader from '@/Components/UI/Header/MobileHeader'
import { BG_COLOUR } from '@/utils/colours'
import { Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react';
import { Suspense } from 'react'


const page = () => {


  return (

    <Suspense fallback={<p>Loading feed...</p>}>
      <Grid bgcolor={'white'} >

        <Header />

        <MobileHeader />

        <HomePage />

      </Grid >
    </Suspense>


  )
}

export default page
