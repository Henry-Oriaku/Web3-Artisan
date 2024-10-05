'use client'

import axios from 'axios';
import apiResponseCode from 'constants/apiResponseCode';
import apiUrl from 'constants/apiUrl';
import webRoutes from 'constants/webRoutes';
import { useRouter } from 'next/navigation';
import { useAccountEffect } from 'wagmi';

export default function ClientLayout({ children }: { children: any }) {
    const router = useRouter();

    useAccountEffect({
        async onConnect({ address }) {
            try {
                const response = await axios.post(apiUrl.checkAddress, {
                    address
                });
                const redirectTo = response.data?.code == apiResponseCode.ACCOUNT_NOT_FOUND ? webRoutes.completeSignup : webRoutes.dashboard;
                router.push(redirectTo);
            } catch (error) {
                console.log(error);

            }
        }
    })
    return (
        <>
            {children}
        </>
    )
}
