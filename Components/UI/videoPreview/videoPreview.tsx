'use client'

import axios from 'axios';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import AWS from 'aws-sdk';
import { VideoCallOutlined } from '@mui/icons-material';

export default function VideoPreview(props: any) {

    const [videoUrl, setVideoUrl] = React.useState('');

    const { src } = props;
    console.log(videoUrl, '@@@@@@@@@@@@@@@@@')

    const prop: UploadProps = {
        name: 'file',
        action: 'https://api.fitpeps.com/video/upload',
        headers: {},
        onChange(info: any) {
            if (info.file.status !== 'uploading') {
            }
            if (info.file.status === 'done') {
                // setVideo(info?.file.response.key);
                const s3 = new AWS.S3({
                    accessKeyId: 'AKIA37K4C6DLEXDWCYP6',
                    secretAccessKey: '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',
                    signatureVersion: 'v4',
                    region: 'ap-south-1',
                });

                const params = {
                    Bucket: 'fitpepsbucket',
                    Key: info?.file.response.Key,
                };

                s3.getSignedUrl('getObject', params, (err, url) => {
                    if (err) {
                        console.error("********************", err);
                        message.error(`filed to load ${info.file.name}.`);
                    } else {
                        setVideoUrl(url);

                    }
                });
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    return (

        <Grid container alignItems='center' xs={10} md={12} sx={{
            justifyContent: { xs: 'center', md: 'center', lg: 'center' },
            bgcolor: 'transparent'
        }} >

            <Box sx={{
                width: { xs: 280, sm: 430, md: 360, lg: 550 },
                height: { xs: 180, sm: 270, md: 260, lg: 340 },

            }}>


                <video controls>
                    <source src={videoUrl} type="video/mp4" />
                </video>
                {/* <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="YouTube video player"
                ></iframe> */}




            </Box>

        </Grid >

    )
} 