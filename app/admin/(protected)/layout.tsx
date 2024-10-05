import { CartProvider } from 'components/cart/cart-context';
import { Navbar } from 'components/layout/navbar';
import { WelcomeToast } from 'components/welcome-toast';
import { GeistSans } from 'geist/font/sans';
import { getCart } from 'lib/shopify';
import { ensureStartsWith } from 'lib/utils';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import '../../globals.css';
import { Input } from '@headlessui/react';
import { AdminNavbar } from 'components/layout/navbar/admin-navbar';



export default async function Layout({ children }: { children: ReactNode }) {
    return (
        <main>
            <AdminNavbar />

            <div className="p-8">
            {children}
            </div>
        </main>
    );
}
