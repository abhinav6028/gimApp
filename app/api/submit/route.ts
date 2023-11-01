import type { NextApiRequest, NextApiResponse } from 'next'
import { google } from "googleapis";

type SheetForm = {
    name: string
    email: string
    message: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).send({ message: 'Only POST requests allowed' })
    }

    const body = req.body as SheetForm

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: "test-829@gymapp-403810.iam.gserviceaccount.com",
                private_key: 'MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDTMKsgg1USMd+v\nuIzpQ/kTmLbHkDnIYbdbZYHcwjfci25pN+J1Yq/KL2Y6umMkg028UpkylpVvbJSq\nlODpWnX5ocChKg91aI6/pIPtxr8vGP6DWtStrSk3ebfm1OWuf94c5n4wgdBq9Gw9\n6r6u2Xch+LWh/hMqx6k0Jy+uUk00wQKcYzyDQuoeoCBZCEtW4QisP2HtaULua7fL\n2V2QCzyYmzUXn8exCkhVtifofI1yA1+wTUL54ir9IuuTyT6lzH68PFMsjNfZ5qk1\nbjW8QLhTMpKCv4p83EpF/jsTc6+rjN7O7Y/oqP+8XAhH77aYIA5CITcPilSPTyAy\nNnZ26HgNAgMBAAECggEABHYBDLUZepfpGgTI8ohys3JEsh8eyVfJurmAg7w/19MY\n0vTQ6MUxN2ZxlLNT3XU/PXIf4EyuqBA1bQurWzfY9Bvxk2CYZlTTZxg/h9SXPJRy\nPoNlqKwsCbWdfS0UE5qJ2OHEL/FzXemp0P5WEXVwfxw0zKYu8MwPi+rOprJVr9Pg\ntfhI2+M1vGHYKW6HoA2Sc42XsVDPZ7y9ZCq5w36yfR7YUU63cdbfnk4uqmMsPftr\np06SBfzVVWEzkm57nqwpRZt0LGtUdaoc9/Ng2gwAfao2oS8mhJLZqG8OlDLWsoxp\nVMxoaZSbaK1mU3tsUUXGCrbC2NoCdJ7f1m7weEIKVQKBgQD29EibYdFu4QuJZIMO\nyM1LwnkdNp1C/WJVfLCmkdLrcY6VrIKBxWLlYPGhkU/UYePdjWwfT53RjAGr9vlj\nI0AvTh9UPigBioVjqkZsbmtbt7Uk+49gVVxOOgZLlxGN8rh7QECmfcmecEBlqwLe\nNiymxU0Plj+7QsSsXBoqYcigzwKBgQDa7QVVN58qkJEZRv46yGpv1llc5Q8OcxMp\nTrS3kZU2/QJe6ZkI6kzvOHzXHBb4V0JHv/bGupEoZaCMbMhT3k/pRSwD8p2hyr5L\nwfPrj2Laui5JVQ1UjbI948TU7rbJIdkIx/1BEyby1/Kke+5sYVFJ7rfhRfhPtHhe\nRC7ekcs4YwKBgQDSH8rDwzhjYsLhNY+5/auIwcEx1S18OYL5AC6CnGNeB/Jtcipd\nZukeCR2v/qdxK5WqBtIv1huPl9Q4UN2jt/O+DHflwzlhDk8vHUvsqQtaL/bGr/Ev\n45G10fNXUAQUxqin3mTkBPWPhS2WFCtNjcTyZcCK+animQ4lJfzxgOAnywKBgQCy\n1wcRO1Ph8KEntg/+szQH0mHD+jbXhff0OaB1iQ8NEZh7MnbaipR4o3uQOhklnBrA\nBDgy1bu49XQ24rKvmJ9NHz26p9pPjhDwUCvTlZmatpcTPtCZ7vrZhhSIIc3d9rGW\nc9EV9PBPV0uXRMpbbRB7xfAergsQCYx+7VIgbZdGowKBgQDwGO/qDisdrR++N+7T\nZnUxrGxJgu5tMn7wQheNR+gqTFF+rGp0ql30FUBp0xLFxGibwkdaGrBD7PDOzY9u\n61b8wc2pCrDBySelLhWzG1VpKSDFjXzXe/h3z1YSdxFl1qtPWVXeBKfdFEAM1kKw\nbrjWqJXapmy76Pu5lNmnV6nmaA=='?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: '1Afc34cKpkDw0xhjsK4zIjSPvcZbkNR35j1scGCevilY',
            range: 'A1:D1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.name, body.email, body.message]
                ]
            }
        });

        return res.status(201).json({
            data: response.data
        })
    } catch (e) {
        return res.status(e.code).send({ message: e.message })
    }

}