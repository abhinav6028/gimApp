"use client"

import Header from '@/Components/UI/Header/Header'
import { Box, Grid, InputAdornment, OutlinedInput, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Styles from '../../Styles/search.module.css'
import { BG_COLOUR } from '@/utils/colours'
import { H4, H5 } from '@/Components/UI/Typography/Typography'
import Button from '@/Components/UI/Button/Button'
import ImageComponent from '@/Components/UI/ImageComponent/ImageComponent'
import MobileHeader from '@/Components/UI/Header/MobileHeader';
import CustomeDropDown from '@/Components/UI/CustomeDropDown/CustomeDropDown'
import { useQueryFetch, useQueryFetchByHeaders, useQueryFetchById } from '@/hooks/useFetchData'
// import { Styles } from '../../Styles/scrolling.module.css'
import qs from "qs";
import { createBrowserHistory } from "history";
import { useRouter } from 'next/navigation'
import VideoPreview from '@/Components/UI/videoPreview/videoPreview'

export default function page() {
    const [categoryId, setCategory] = useState(3)
    const [langId, setLangId] = useState(1)
    const history = createBrowserHistory();
    const router = useRouter()
    const [showVideo, setShowVideo] = useState(false)

    useEffect(() => {
        const filterParams = history.location.search.split('?')
        const filtersFromParams = qs.parse(filterParams[1]);
        if (filtersFromParams.categoryId) {
            setCategory(Number(filtersFromParams.categoryId));
        }
        if (filtersFromParams.languageId) {
            setLangId(Number(filtersFromParams.languageId));
        }
    }, []);
    const { fetchedData: fetchByCategory } = useQueryFetchById(`video?languageId=${langId}&categoryId=${categoryId}`)

    console.log(fetchByCategory, '33333333333333', showVideo)

    // const buttons = [
    //     {
    //         btnName: 'Pre-Beginner',
    //         id: 0
    //     },
    //     {
    //         btnName: 'Beginner', id: 1
    //     },
    //     {
    //         btnName: 'Intermediate', id: 2
    //     },
    //     {
    //         btnName: 'Expert', id: 3
    //     }
    // ]

    const categories = useQueryFetch('category').fetchedData
    const languages = useQueryFetch('languages').fetchedData

    const selectCategory = (index: any, id: any) => {
        setCategory(id)
        // setSelectedBtn(index)
        router.push(`?languageId=${langId}&categoryId=${id}`)
    }

    const selectLang = (lang: any) => {
        setLangId(lang)
        router.push(`?languageId=${lang}&categoryId=${categoryId}`)

    }

    const handleImageClick = () => {
        setShowVideo(!showVideo);
    };
    return (
        <Grid container sx={{ bgcolor: BG_COLOUR, justifyContent: 'center' }}>

            <Header />

            <MobileHeader />

            <Grid xs={10} sm={10} lg={11} container sx={{
                justifyContent: 'center', alignItems: 'center', bgcolor: '',
                mt: 12,
                height: 46
            }}>


                <Box sx={{
                    width: '100%',
                    height: '100%',
                    bgcolor: '',
                    mt: 1,

                }}>
                    <input type="text" className={Styles.serach_field}
                        placeholder='Search'
                    />
                </Box>

            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
                <CustomeDropDown options={languages} langId={langId} setSelectedLang={selectLang} lg='1' md='1' xs='2' bgcolor='transparent' />
            </Grid>
            <Grid container xs={11} lg={11} bgcolor="" sx={{ my: 4, justifyContent: 'space-around' }}>

                {
                    categories?.map((data: any, index: any) => {
                        return (
                            <Box onClick={() => selectCategory(index, data.id)} >
                                <Button key={index} bgcolor={data.id == categoryId ? 'white' : ''}>{data.name}</Button>
                            </Box>
                        )
                    }
                    )
                }

            </Grid>


            {
                fetchByCategory?.length != 0 ? fetchByCategory?.map((data: any, index: any) => (

                    <Grid container justifyContent='center' alignItems='center'>

                        <Grid container lg={11} bgcolor='' sx={{ my: { xs: 1, lg: 2 } }}>

                            <Grid
                                container
                                lg={6}
                                sx={{ justifyContent: 'center', alignItems: 'center' }}
                                onClick={handleImageClick}
                            >
                                {/* {data?.video?.map((item: any, indx: any) => ( */}
                                {showVideo ?
                                    <VideoPreview fileName={data.video} /> :
                                    <ImageComponent />}

                                {/* ))} */}
                            </Grid>

                            <Grid container lg={6} bgcolor='' sx={{
                                // justifyContent: 'center',
                                // alignItems: 'center'
                            }}>

                                <Box sx={{
                                    my: { xs: 3, lg: 3 },
                                    width: '100%',
                                }}>
                                    <H4 fontWeight="bold" textAlign='start'>{data.title} {data.dayNo}</H4>
                                </Box>


                                <Box sx={{

                                    width: '100%',
                                    // textAlign: 'center',
                                    // bgcolor: 'red'
                                }}>

                                    <Grid sx={{
                                        // justifyContent: 'center',
                                        mt: { xs: -2, lg: -13 },
                                        mx: { xs: 2.5, sm: 2, md: 2.5, lg: '' }
                                    }}>

                                        <H5 textAlign='start' width='100%'>

                                            {/* Lorem Ipsum is simply dummy text of the printing and
                                            typesetting ustry. Lorem Ipsum has been the industry s
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but
                                            also the leap into electronic typesetting, remaining essentially
                                            unchanged */}
                                            {data.description}

                                        </H5>


                                    </Grid>

                                </Box>

                            </Grid>

                        </Grid>

                        <Box sx={{
                            bgcolor: '#000000',
                            width: { xs: '92%', sm: '92%', md: '95%', lg: '96%' },
                            height: '0.8px',
                            my: 3, mt: 3
                        }} />
                    </Grid >

                ))
                    :

                    <h1>No items to show</h1>

            }



        </Grid >
    )
}
