'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

export default function withWallet(WrappedComponent: any) {
    return (props: any) => {
        const router = useRouter();
        const { address, isConnected } = useAccount();
        useEffect(() => {
            if (!address && !isConnected) {
                // router.push('/?wallet=true');
            }
        }, [address, isConnected])

        if (!isConnected) {
            // return null
        }
        return <WrappedComponent {...props} />
    }
}