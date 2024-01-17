"use client"

import Header from '@/Components/UI/Header/Header'
import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Styles from '../../Styles/search.module.css'
import { BG_COLOUR } from '@/utils/colours'
import { H4, H5 } from '@/Components/UI/Typography/Typography'
import Button from '@/Components/UI/Button/Button'
import ImageComponent from '@/Components/UI/ImageComponent/ImageComponent'
import MobileHeader from '@/Components/UI/Header/MobileHeader';
import CustomeDropDown from '@/Components/UI/CustomeDropDown/CustomeDropDown'
import { useQueryFetch, useQueryFetchByHeaders } from '@/hooks/useFetchData'
import { useRouter, useSearchParams } from 'next/navigation'
import VideoPreview from '@/Components/UI/videoPreview/videoPreview'
import { message } from 'antd'
import axios from 'axios'
import { BASE_URL } from '@/utils/urls'
import Cookies from 'js-cookie'

export default function page() {
    const [seeMore, setSeeMore] = useState(null)
    const [categoryId, setCategory] = useState(3)
    const [langId, setLangId] = useState(22)
    const router = useRouter()
    const [showVideo, setShowVideo] = useState(false)

    const params = useSearchParams()

    useEffect(() => {
        const token = Cookies.get('auth_token')
        // const data = useQueryFetchByHeaders('auth/profile').fetchedData
        axios.get(`${BASE_URL}auth/profile`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
            console.log(res, 'ressssssssssssssssss')
            const expiryDateObject = new Date(res?.data?.result?.client?.expireOn);
            expiryDateObject.setHours(23, 59, 59, 999);
            if (res?.data?.result?.client?.isActive === false) {
                // if (res?.data?.result?.client?.expire_on < Date.now()) {
                message.error('Please Subscribe to Continue..')
                router.push('/subscription')
                // }
            } else if (Date.now() > expiryDateObject) {
                message.error('Subscription expired, Kindly subscribe to continue')
                router.push('/')
            }

        }).catch((err) => {
            console.log(err)
        })
        if (params.get('categoryId')) {
            setCategory(Number(params.get('categoryId')));
        }
        if (params.get('languageId')) {
            setLangId(Number(params.get('languageId')));
        }
    }, []);

    const { fetchedData: fetchByCategory } = useQueryFetchByHeaders(`video?languageId=${langId}&categoryId=${categoryId}`)

    console.log(fetchByCategory, 'EEEEEEEEEEEEEEEE')

    const categories = useQueryFetch('category').fetchedData
    // const languages = useQueryFetch('languages').fetchedData
    const languages = [{ id: 22, name: 'English' }, { id: 20, name: 'Tamil' }]

    console.log(languages, '00000000000000000')
    const selectCategory = (index: any, id: any) => {
        setCategory(id)
        router.push(`?languageId=${langId}&categoryId=${id}`)
    }

    const selectLang = (lang: any) => {
        setLangId(lang)
        router.push(`?languageId=${lang}&categoryId=${categoryId}`)

    }

    const handleImageClick = (index: any) => {
        setShowVideo(index);
    };
    return (
        <Grid container sx={{ justifyContent: 'center' }}>

            <Header />

            <MobileHeader />

            {/* <Grid xs={10} sm={10} lg={11} container sx={{
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

            </Grid> */}
            <Grid sx={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
                <CustomeDropDown options={languages} setSelectedLang={selectLang} lg='1' md='1' xs='2' bgcolor='whitesmoke' />
            </Grid>

            <Grid container bgcolor="" sx={{ my: 4, display: 'flex', justifyContent: 'space-around', spacing: 5 }}>

                {
                    categories?.map((data: any, index: any) => {
                        return (
                            <Grid key={index} container bgcolor='' xs={6} md={3} sx={{ justifyContent: "center" }}>

                                <Box onClick={() => selectCategory(index, data.id)} sx={{ m: 2 }} >
                                    <Button key={index} bgcolor={data.id == categoryId ? 'white' : ''}>{data.name}</Button>
                                </Box>
                            </Grid>
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
                                onClick={() => handleImageClick(index)}
                            >
                                {/* {data?.video?.map((item: any, indx: any) => ( */}
                                {showVideo === index ?
                                    <VideoPreview fileName={data.video} /> :
                                    <ImageComponent />}

                                {/* ))} */}
                            </Grid>

                            <Grid container lg={6} bgcolor='' sx={{

                            }}>

                                <Box sx={{
                                    my: { xs: 3, lg: 3 },
                                    width: '100%',
                                }}>
                                    {/* <H4 fontWeight="bold" textAlign='start'>{data.title} {data.dayNo}</H4> */}
                                    <H4 fontWeight="bold" textAlign='start'>{data.title} </H4>
                                </Box>


                                <Box sx={{

                                    width: '100%',

                                }}>

                                    <Grid sx={{
                                        alignItems: 'center',
                                        mt: { xs: -2, lg: -13 },
                                        mx: { xs: 2.5, sm: 2, md: 2.5, lg: '' }
                                    }}>

                                        <H5 textAlign='start' width='100%' height='100%'>


                                            {/* {dummyDesc.length > 300 && seeMore != index ? <p>{dummyDesc.slice(0, 300)}  </p> : dummyDesc} */}
                                            {/* {dummyDesc.length > 300 ? <p style={{ fontSize: '15px', textAlign: 'end', cursor: 'pointer', marginTop: '30px' }} onClick={() => setSeeMore(seeMore !== index ? index : null)}>{seeMore !== index ? 'See More..' : 'See Less'}</p> : null} */}
                                            {data.description.length > 300 && seeMore != index ? <p>{data.description.slice(0, 300)}  </p> : data.description}
                                            {data.description.length > 300 ? <p style={{ fontSize: '15px', textAlign: 'end', cursor: 'pointer', marginTop: '30px' }} onClick={() => setSeeMore(seeMore !== index ? index : null)}>{seeMore !== index ? 'See More..' : 'See Less'}</p> : null}
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
