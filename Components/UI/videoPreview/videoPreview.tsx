'use client'

import React from 'react';
import { Box, Grid } from '@mui/material';
import { message } from 'antd';
import AWS from 'aws-sdk';


export default function VideoPreview(props: any) {

    const [videoUrl, setVideoUrl] = React.useState('');

    const { fileName } = props;

    const s3 = new AWS.S3({
        accessKeyId: 'AKIA37K4C6DLEXDWCYP6',
        secretAccessKey: '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',
        signatureVersion: 'v4',
        region: 'ap-south-1',
    });

    const params = {
        Bucket: 'fitpepsbucket',
        Key: fileName
    };

    s3.getSignedUrl('getObject', params, (err, url) => {
        if (err) {
            console.error("********************", err);
            message.error(`filed to load ${fileName}.`);
        } else {

            setVideoUrl(url);

        }
    });

    return (

        <Grid container alignItems='center' xs={10} md={12} sx={{
            justifyContent: { xs: 'center', md: 'center', lg: 'center' },
            bgcolor: 'transparent'
        }} >

            <Box sx={{
                width: { xs: 280, sm: 430, md: 360, lg: 550 },
                height: { xs: 280, sm: 270, md: 260, lg: 340 },

            }}>

                {videoUrl ?
                    <video controls autoPlay controlsList="nodownload" onContextMenu={(e) => e.preventDefault()} style={{ height: '280px', width: '100%' }}>
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                    : ''}
            </Box>

        </Grid >

    )
} 