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
            axios.post(apiUrl.checkAddress, {
                address
            }).then((response) => {
                const redirectTo = response.status != 200 ? webRoutes.completeSignup : webRoutes.dashboard;
                router.push(redirectTo);
            });
        },
    })
    return (
        <>
            {children}
        </>
    )
}
