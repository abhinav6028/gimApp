"use client"

import React from 'react';
import { Grid } from '@mui/material'
import Banner from './Banner/Banner';
import VideoSection from './VideoSection/VideoSection';
import WorkOutCategory from './WorkOutCategory/WorkOutCategory';
import ClientSays from './ClientSays/ClientSays';
import ContactUs from '../UI/ContactUs/ContactUs';
import OurStory from './OurStory/OurStory';
import MobileBanner from './Banner/MobileBanner';

export default function HomePage() {


    console.log("hellooo")

    return (
        <Grid container>

            <Banner />

            <MobileBanner />

            <VideoSection />

            {/* <WorkOutCategory /> */}

            <OurStory />

            <ClientSays />

            <ContactUs />

        </Grid>
    )
}
