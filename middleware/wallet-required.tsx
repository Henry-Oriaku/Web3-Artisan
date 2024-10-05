'use client'
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react'
import { useAccount } from 'wagmi';

export default function WalletRequired({ children }: { children: ReactNode }) {
    const router = useRouter();
    const { address, isConnected } = useAccount();
    useEffect(() => {
        if (!address && !isConnected) {
            router.push('/?wallet=true');
        }
    }, [address, isConnected])
    return (
        <>
            {isConnected && children}
        </>
    )
}
