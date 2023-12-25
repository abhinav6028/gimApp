"use client"
import Header from '@/Components/UI/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import AuthProvider from '../Components/AuthProvider/AuthProvider';


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  const queryClient = new QueryClient()

  const router = useRouter()

  return (

    <html lang="en">

      <head>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@600&family=Oxygen:wght@700&display=swap" rel="stylesheet"></link>
        <title>Fitpeps</title>
      </head>



      <body className={inter.className}>

        <QueryClientProvider client={queryClient}>
          <AuthProvider>

            {children}

          </AuthProvider>
        </QueryClientProvider>


      </body>



    </html>
  )
}
