
import { GeistSans } from 'geist/font/sans'
import React, { ReactNode } from 'react'
import '@/lib/api/axios'
import './globals.css';
import '@/assets/flaticon/flaticon.css'
import { Web3Provider } from '@/contexts/web3-provider';

// import '../styles/theme.less';

export default async function RootLayout({ children }) {

    return (
        <html lang="en" className={GeistSans.variable}>
            <body className="">
                <Web3Provider>
                    {children}
                </Web3Provider>
            </body>
        </html>
    )
}
