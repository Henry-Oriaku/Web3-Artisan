'use client';

import axios from 'axios';
import apiResponseCode from '@/constants/apiResponseCode';
import apiUrl from '@/constants/apiUrl';
import webRoutes from '@/constants/webRoutes';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useAccountStore } from '@/store/accountStore';
import { useRequestStore } from '@/store/requestStore';

export default function ClientLayout({ children }) {
    const router = useRouter();
    const currentPath = usePathname();
    const { address, isConnected } = useAccount();
    const { setUser } = useAccountStore();
    const { requests } = useRequestStore();
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
                        setUser(response.data.data)
                        console.log('user set');

                    }

                    if (currentPath != redirectTo) {
                        if (redirectTo.includes("dashboard") && currentPath.includes("dashboard")) {
                            return;
                        }
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
            {requests > 0 && <Loader />}
            {children}
        </>
    );
}
