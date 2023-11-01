import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import Styles from '../../../Styles/inputfield.module.css'
import { useSearchParams } from 'next/navigation'

export default function CustomeDropDown(props: any) {

    const searchParams = useSearchParams()
    const langId = searchParams.get('languageId')
    const genders = ['Male', 'Female', 'Others']
    const { gender, setGender, name, options, lg, md, xs, bgcolor, setSelectedLang, } = props

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setGender ? setGender(event.target.value) :
            setSelectedLang ? setSelectedLang(event.target.value) : null
    };



    return (
        <Grid container xs={xs ? xs : null} md={md ? md : 6} lg={lg ? lg : 6} bgcolor='' sx={{

            mt: {
                xs: 1.5, lg: 2,
                bgcolor: '',
                mx: 3
            },
            mr: gender ? 0 : 5
        }} >
            <Typography sx={{
                fontWeight: 'bold',
                width: '80%',
                bgcolor: ''
            }}>{name}</Typography>

            <Box sx={{
                width: { xs: '100%', lg: '80%' },
                height: { xs: 35, md: 37 }, mt: 0.6,
                bgcolor: ''
            }}>
                <select
                    onChange={handleChange}
                    className={Styles.field}
                    style={{ backgroundColor: bgcolor, cursor: 'pointer', fontSize: 15, padding: 10, color: '#656565', fontWeight: 'bold' }}
                >
                    {setGender ?
                        genders.map((item, index) => (
                            <option value={item} key={index}>{item}</option>

                        ))
                        :
                        options?.map((item: any, index: any) => (
                            <option selected={langId ? langId == item.id : false} value={item.id} key={index}>{item.name}</option>
                        ))
                    }


                </select>
            </Box>
        </Grid>
    )
}
