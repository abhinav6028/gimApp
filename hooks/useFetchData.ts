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
    try {

        const token = Cookies.get('auth_token')

        const { data: fetchedData, refetch } = useQuery([url], () =>

            fetch(BASE_URL + url, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                }
            }).then(res => {
                console.log(res, '0000000000000')
                return res.json()
            }
            )


        )

        return { fetchedData: fetchedData?.result, refetch }
    } catch (error) {
        console.log(error)
    }
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