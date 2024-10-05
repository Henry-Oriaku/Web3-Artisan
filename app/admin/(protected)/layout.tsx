import { GeistSans } from 'geist/font/sans';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import '../../globals.css';
import { Input } from '@headlessui/react';



export default async function Layout({ children }: { children: ReactNode }) {
    return (
        <main>
            <div className="p-8">
                {children}
            </div>
        </main>
    );
}
