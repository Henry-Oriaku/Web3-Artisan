'use client'
import withWallet from 'middleware/with-wallet'
import React, { ReactNode } from 'react'

function Layout({ children }) {
    return (
        <>
            {children}
        </>
    )
}

export default withWallet(Layout);