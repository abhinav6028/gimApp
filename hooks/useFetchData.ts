import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from '@/utils/urls';
import { url } from 'inspector';
import Cookies from 'js-cookie';

export const useQueryFetch = (url: any) => {

    // const token = useBearerToken()

    const { data: fetchedData, refetch } = useQuery([url], () =>

        fetch(BASE_URL + url).then(res =>
            res.json()
        )

    )

    return { fetchedData: fetchedData?.result, refetch }

}



export const useQueryFetchById = (url: any) => {
    // try {
    //  const token = useBearerToken()
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiaGluYWEiLCJyb2xlIjoiY2xpZW50IiwiaWQiOjc5LCJpYXQiOjE2OTg2NjczODUsImV4cCI6MTcwNjQ0MzM4NX0.p1D9IU48CxZpg9V2SRfCw8vFjwg7bppuuzAt1UEjjTQ'

    const { data: fetchedData, refetch } = useQuery([url], () =>
        //video?languageId=1&categoryId=0
        fetch(BASE_URL + url, {

            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }
        ).then(res => {
            console.log(res, "////////////////////////");

            res.json()

        }

        )

    )
    console.log("____________________", fetchedData);

    return { fetchedData: fetchedData?.result, refetch }
    // } catch (err) {
    //     console.log(err, '00000000000')
    // }
}




export const useQueryFetchByHeaders = (url: any) => {
    // try {

    const token = Cookies.get('auth_token')

    const { data: fetchedData, refetch } = useQuery([url], () =>

        fetch(BASE_URL + url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }).then(res =>
            res.json()
        )


    )

    return { fetchedData: fetchedData?.result, refetch }
    // } catch (error) {
    //     console.log(error)
    // }
}