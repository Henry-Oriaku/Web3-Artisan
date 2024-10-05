'use client'
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react'
import { useAccount } from 'wagmi';

export default function WalletRequired({ children }: { children: ReactNode }) {
    const router = useRouter();
    const { address, isConnected } = useAccount();
    useEffect(() => {
        if (!address && !isConnected) {
            router.push('/', { query: { wallet: false } });
        }
    }, [])
    return (
        <>
            {children}
        </>
    )
}
