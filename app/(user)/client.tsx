'use client';

import axios from 'axios';
import apiResponseCode from 'constants/apiResponseCode';
import apiUrl from 'constants/apiUrl';
import webRoutes from 'constants/webRoutes';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

export default function ClientLayout({ children }: { children: any }) {
    const router = useRouter();
    const currentPath = usePathname();
    const { address, isConnected } = useAccount();

    useEffect(() => {
        const checkAccount = async () => {
            if (isConnected && address) {
                try {
                    const response = await axios.post(apiUrl.checkWallet, {
                        address
                    });
                    const redirectTo = response.data?.code === apiResponseCode.ACCOUNT_NOT_FOUND
                        ? webRoutes.completeSignup
                        : webRoutes.dashboard;
                    if (response.data?.code !== apiResponseCode.ACCOUNT_NOT_FOUND) {
                        localStorage.setItem('user', JSON.stringify(response.data.data))
                    }

                    if (currentPath != redirectTo) {
                        router.push(redirectTo);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        };

        checkAccount();
    }, [address, isConnected, router]);

    return (
        <>
            {children}
        </>
    );
}
