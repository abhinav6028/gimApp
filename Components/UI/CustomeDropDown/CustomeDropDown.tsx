import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import Styles from '../../../Styles/inputfield.module.css'

export default function CustomeDropDown(props: any) {

    // const [selectedValue, setSelectedValue] = React.useState('');

    const { gender, setGender } = props

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setGender(event.target.value);
    };


    // /console.log("selectedValue", selectedValue);

    return (
        <Grid container md={6} lg={6} bgcolor='' sx={{

            mt: {
                xs: 1.5, lg: 2,
                bgcolor: '',
                mx: 3
            }
        }} >
            <Typography sx={{
                fontWeight: 'bold',
                width: '80%',
                bgcolor: ''
            }}>Gender</Typography>

            <Box sx={{
                width: { xs: '100%', lg: '80%' },
                height: { xs: 35, md: 37 }, mt: 0.6,
                bgcolor: ''
            }}>
                <select
                    onChange={handleChange}
                    className={Styles.field}
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>

                </select>
            </Box>
        </Grid>
    )
}
