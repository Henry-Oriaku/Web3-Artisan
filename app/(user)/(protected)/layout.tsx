import WalletRequired from 'middleware/wallet-required'
import React, { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <WalletRequired>
            {children}
        </WalletRequired>
    )
}
