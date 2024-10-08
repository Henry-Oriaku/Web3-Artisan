'use client'
import withWallet from 'middleware/with-wallet'
import React, { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
    return (
            {children}
    )
}

export default withWallet(Layout);