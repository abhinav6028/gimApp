import { Grid, Typography, Box } from '@mui/material'
import React from 'react';
import Styles from '../../../Styles/inputfield.module.css'

export default function CustomeTextField(props: any) {

    const { data, formik, lg, one, xs, justifyContent, fieldHeight, fieldWidth, buttonDisplay, setButtonDisplay, buttonDisplay2, setButtonDisplay2 } = props


    return (
        <Grid container
            xs={xs && xs}
            md={7} lg={lg ? lg : 6} sx={{
                mt: {
                    xs: 1.5, lg: 2,
                    bgcolor: '',
                    mx: 3,
                    justifyContent: justifyContent
                }
            }}>

            <Typography sx={{
                fontWeight: 'bold',
                width: '100%',
                bgcolor: '',
            }}>{data.fieldName}</Typography>

            <Box sx={{
                width: { xs: '100%', lg: fieldWidth ? fieldWidth : '100%' },
                height: {
                    xs: 35, md: fieldHeight ? fieldHeight : 38,
                },
                mt: 0.6,
                bgcolor: ''
            }}>

                <input

                    className={Styles.field}
                    placeholder={data.textFieldName}
                    id={data.id}
                    name={data.id}
                    type={data.type}
                    onChange={formik.handleChange}
                    value={formik.values[data.id]}
                    // onError={formik.touched[data.id] && Boolean(formik.errors[data.id])}
                    helperText={formik.touched[data.id] && formik.errors[data.id]}
                    onBlur={formik.handleBlur, () => { setButtonDisplay(!buttonDisplay) }}

                />

            </Box>

        </Grid>
    )
}
