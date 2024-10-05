import { CartProvider } from 'components/cart/cart-context';
import { WelcomeToast } from 'components/welcome-toast';
import { GeistSans } from 'geist/font/sans';
import { ensureStartsWith } from 'lib/utils';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import '../globals.css';
import { Input } from '@headlessui/react';
import { AdminNavbar } from 'components/layout/navbar/admin-navbar';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: SITE_NAME!,
        template: `%s | ${SITE_NAME}`
    },
    robots: {
        follow: true,
        index: true
    },
    ...(twitterCreator &&
        twitterSite && {
        twitter: {
            card: 'summary_large_image',
            creator: twitterCreator,
            site: twitterSite
        }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {

    return (
        <main>
            {children}
        </main>

    );
}
