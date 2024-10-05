'use client'

import axios from 'axios';
import apiUrl from 'constants/apiUrl';
import webRoutes from 'constants/webRoutes';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useAccount, useAccountEffect } from 'wagmi';

export default function ClientLayout({ children }: { children: any }) {
    const router = useRouter();

    useAccountEffect({
        async onConnect({ address }) {
            try {
                const response = await axios.post(apiUrl.checkAddress, {
                    address
                });
                const redirectTo = !!response.status?.status ? webRoutes.completeSignup : webRoutes.dashboard;
                router.push(redirectTo);
            } catch (error) {

            }
        }
    })
    return (
        <>
            {children}
        </>
    )
}
