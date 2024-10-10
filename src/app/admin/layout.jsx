import { GeistSans } from 'geist/font/sans';
import { ensureStartsWith } from '@/lib/utils';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import { Input } from '@headlessui/react';


export default async function RootLayout({ children }) {

    return (
        <main>
            {children}
        </main>

    );
}
