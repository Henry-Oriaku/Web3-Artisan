'use client'
import classes from '@/assets/styles/style.module.css';
import GradientBg from "@/components/gradient-bg";
import NavBar from "@/components/navbar";
import ArtisanCard from "@/components/user/service/artisan-card";
import { GiftIcon, KeyIcon, MagnifyingGlassIcon, ShieldExclamationIcon } from "@heroicons/react/24/outline";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { ConnectKitButton } from "connectkit";
import Image from "next/image";
import { useAccount } from "wagmi";
// export const metadata = {
//   description: 'Web3 Artisans.',
//   openGraph: {
//     type: 'website'
//   }
// };

export default function HomePage() {
  const menus = [
    {
      title: 'View Artisan',
      link: '/artisans'
    }
  ];
  const featuredArtisans = [
    {
      images: ['https://w3stuffs.alwaysdata.net/uploads/enog.png'],
      slug: 'enog',
      category: 'Beauty',
      name: 'Enog Beuaty Service',
      least_price: '5',
      total_works: 0,
      user: {
        name: 'Enog',
        avatar: '/images/avatar.png'
      },
    }
    , {
      images: ['/images/image.png'],
      slug: 'footy',
      category: 'Shoes',
      name: 'Strinc Tech Service',
      least_price: '10',
      total_works: 0,
      user: {
        name: 'John Doe',
        avatar: '/images/avatar.png'
      },
    }
  ]
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  return (
    <>
      <div className="relative overflow-hidden supports-[overflow:clip]:overflow-clip flex flex-col min-h-screen">
        <header id="site-header" className="absolute top-2 md:top-6 w-full z-30">
          <div className="max-w-6xl mx-auto px-4 py-2 sm:px-6">
            <div className="flex items-center justify-between gap-3 h-14 rounded-2xl px-3 backdrop-blur-sm bg-white bg-opacity-80">
              <div> <a className="block" href="#" rel="home" style={{ outline: 'none' }}> <span className="sr-only">Cruip</span>
                <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path d="M28 14a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0" fill="#D1D5DB">
                    </path>
                    <path d="M23.865 23.9a13.932 13.932 0 01-6.377 3.66c-1.115.286-2.284.44-3.488.44a13.893 13.893 0 01-10.512-4.797A13.968 13.968 0 01.048 14c0-3.523 1.298-6.742 3.44-9.203A13.893 13.893 0 0114 0c1.204 0 2.373.154 3.488.44a13.932 13.932 0 016.377 3.66l-4.933 4.95A6.942 6.942 0 0014 7c-3.852 0-6.976 3.134-6.976 7l.002.18C7.122 17.964 10.208 21 14 21c1.926 0 3.67-.784 4.932-2.05l4.933 4.95z" fill="#7E5FFB" fillRule="nonzero">
                    </path>
                  </g>
                </svg> </a>
              </div>
              <div className="inline-flex items-center">
                <NavBar menus={menus} />
                <div className="ml-6">
                  <ConnectKitButton showAvatar showBalance />
                  {/* <Button className=" text-gray-50 bg-gray-800 hover:bg-gray-900 group">Link Wallet <WalletIcon /></Button> */}
                </div>
                <div className="flex sm:hidden ml-2">
                  <button id="header-nav-toggle" className="group inline-flex w-8 h-8 text-gray-800 text-center items-center justify-center transition" aria-controls="header-nav" aria-expanded="false" style={{ outline: 'none' }}> <span className="sr-only">Menu</span> <svg className="fill-current pointer-events-none" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"> <rect className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] translate-x-[7px] group-[[aria-expanded=true]]:rotate-[315deg] group-[[aria-expanded=true]]:translate-y-0 group-[[aria-expanded=true]]:translate-x-0" y="7" width="9" height="2" rx="1">
                  </rect> <rect className="origin-center group-[[aria-expanded=true]]:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]" y="7" width="16" height="2" rx="1">
                    </rect> <rect className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-[[aria-expanded=true]]:rotate-[135deg] group-[[aria-expanded=true]]:translate-y-0" y="7" width="9" height="2" rx="1">
                    </rect> </svg>
                  </button>
                  <nav id="header-nav" className="grid grid-rows-[0fr] rounded-xl [&amp;.menu-is-open]:grid-rows-[1fr] [&amp;.menu-is-open]:visible absolute inset-x-0 top-full mt-1 z-50 [&amp;.menu-is-open]:bg-white [&amp;.menu-is-open]:shadow-lg shadow-black/[.04] transition-all duration-300 [&amp;>div]:opacity-0 [&amp;.menu-is-open>div]:opacity-100">
                    <div className="overflow-hidden transition-opacity duration-300">
                      <ul className="text-sm py-1.5 px-3 divide-y divide-gray-100">
                        <li className="relative"> <a href="#x/" className="flex text-gray-800 hover:underline py-2 px-2" style={{ outline: 'none' }}>Cruip X</a> <span className="uppercase text-emerald-500 text-[10px] font-semibold absolute top-2 left-16">New</span>
                        </li>
                        <li> <a href="#docs/" className="flex text-gray-800 hover:underline py-2 px-2" style={{ outline: 'none' }}>Documentation</a>
                        </li>
                        <li> <a className="flex text-gray-800 hover:underline py-2 px-2" href="#login/" style={{ outline: 'none' }}>Login</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="grow">
          <div className="pb-12">
            <section className="relative before:absolute before:inset-0 before:pointer-events-none before:-z-10 before:bg-gray-100 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-gray-900/10 after:to-transparent z-10">
              <GradientBg />
              <div className="pt-40 pb-20 text-center max-w-6xl mx-auto px-4 py-20 sm:px-6 flex flex-col gap-4">
                <Title className="" >Join us & Explore Thousands of Freelancer</Title>
                <p>Work with talented people at the most affordable price to get the most out of your time and cost</p>
                <div className={`mx-auto w-4/5 sm:w-2/4 flex items-center justify-between gap-3 p-3 rounded-full ${classes.searchBox}`}>
                  <div className='mx-3 flex text-center h-6 w-6' >
                    <MagnifyingGlassIcon />
                  </div>
                  <input className={`w-full ${classes.searchInput}`} placeholder="What Service do are you looking for?" />
                  {/* <input type="number" placeholder="What's your budget for this service?" /> */}
                  <button className="bg-zinc-800 p-3 text-white rounded-full px-6">Search</button>
                </div>
              </div>
            </section>
            {/* Featured */}
            <section className="max-w-6xl mx-auto px-4 py-20 sm:px-6">
              <Title level={3}>Featured Artisans</Title>
              <p>Most viewed and all-time top-selling services</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-10 mt-8">
                {featuredArtisans.map((artisan) => (
                  <ArtisanCard key={artisan.slug} artisan={artisan} />
                ))}
              </div>
            </section>
            {/* ABOUT us */}
            <section className="max-w-6xl mx-auto px-4 py-20 sm:px-6 w-full p-4 flex sm:flex-row flex-col gap-10">
              <div className=" flex-1">
                <Title level={1}>A whole world of freelance talent at your fingertips</Title>
                <div className="mt-10 flex flex-col gap-3">
                  <div className="flex gap-4 items-start pt-4">
                    <div className="h-6 w-6">
                      <GiftIcon />
                    </div>
                    <div className="">
                      <Paragraph style={{ lineHeight: '0 !important' }} className="text-xl ">Proof of quality</Paragraph>
                      <Paragraph className="pt-0 mt-0" >Check any pro’s work samples, client reviews, and identity verification.</Paragraph >
                    </div>
                  </div>
                  <div className="flex gap-4 items-start pt-4">
                    <div className="h-6 w-6">
                      <KeyIcon />
                    </div>
                    <div className="">
                      <Paragraph style={{ lineHeight: '0 !important' }} className="text-xl ">Secured Payment</Paragraph>
                      <Paragraph className="pt-0 mt-0" >Onchain Payment System to Ensure safty</Paragraph>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start pt-4">
                    <div className="h-6 w-6">
                      <ShieldExclamationIcon />
                    </div>
                    <div className="">
                      <Paragraph style={{ lineHeight: '0 !important' }} className="text-xl ">Data Safety</Paragraph>
                      <Paragraph className="pt-0 mt-0" >Web3 Technology to mitigate privacy flaws</Paragraph>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <Image className="rounded-xl" alt="Freelancer Working" height={300} width={400} src="/images/lady.png" />

              </div>

            </section>
            {/* User type */}
            <section className="gap-10 max-w-6xl mx-auto px-4 py-20 sm:px-6 flex sm:flex-row flex-col w-full justify-between">
              <div className=" justify-center items-center p-10 rounded-lg flex flex-col gap-8 bg-pink-100">
                <Image alt="Artisan" height={150} width={250} src="/images/freelancer.png" />

                <div className="text-center">
                  <Title className="my-3" level={1}>Find great work</Title>
                  <p>Work with the largest network of independent professionals and get things done—from quick turnaround.</p>
                </div>
                <ConnectKitButton.Custom children={({ isConnected, show }) => {
                  return <button key='artisan' onClick={() => show ? show() : () => { }} className="bg-zinc-800 p-3 text-white rounded-full px-6">Get Started ↗</button>
                }} />
              </div>

              <div className=" justify-center items-center p-10 rounded-lg flex flex-col gap-8 bg-pink-50">
                <Image alt="Finder" height={150} width={250} src="/images/finder.png" />
                <div className="text-center">
                  <Title className="my-3" level={1}>Find talent your way</Title>
                  <p>Work with the largest network of independent professionals and get things done—from quick turnaround.</p>
                </div>
                <ConnectKitButton.Custom children={({ isConnected, show }) => {
                  return <button key='finder' onClick={() => show ? show() : () => { }} className="bg-zinc-800 p-3 text-white rounded-full px-6">Get Started ↗</button>
                }} />

              </div>
            </section>
          </div>
        </main>
        <footer>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pb-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6">
                <div> <a className="inline-block mb-2" href="#" rel="home" style={{ outline: 'none' }}> <span className="sr-only">Cruip</span>
                  <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <path d="M28 14a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0" fill="#D1D5DB">
                      </path>
                      <path d="M23.865 23.9a13.932 13.932 0 01-6.377 3.66c-1.115.286-2.284.44-3.488.44a13.893 13.893 0 01-10.512-4.797A13.968 13.968 0 01.048 14c0-3.523 1.298-6.742 3.44-9.203A13.893 13.893 0 0114 0c1.204 0 2.373.154 3.488.44a13.932 13.932 0 016.377 3.66l-4.933 4.95A6.942 6.942 0 0014 7c-3.852 0-6.976 3.134-6.976 7l.002.18C7.122 17.964 10.208 21 14 21c1.926 0 3.67-.784 4.932-2.05l4.933 4.95z" fill="#7E5FFB" fillRule="nonzero">
                      </path>
                    </g>
                  </svg> </a>
                  <div className="text-gray-500 text-[13px]">©<a href="#" style={{ outline: 'none' }}> Web3 Artisans</a>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-900 font-medium mb-3">Company</h4>
                  <ul className="text-sm space-y-3 md:space-y-2">
                    {/* <li className="mb-2 flex items-center"> <a className="text-gray-500 hover:underline" href="#affiliate-program/" style={{ outline: 'none' }}>Affiliate program</a> <svg className="-mt-0.5 ml-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
                      <path fill="#FACC15" d="m6 0 1.7 4.3L12 6 7.7 7.7 6 12 4.3 7.7 0 6l4.3-1.7L6 0Z" opacity=".8">
                      </path>
                    </svg>
                    </li>
                    <li className="flex items-center gap-2"> <span className="text-gray-500">Follow us on X</span> <span className="flex -space-x-2 -ml-0.5"> <a className="group relative w-7 h-7 overflow-hidden rounded-full border-2 border-white" href="https://x.com/pacovitiello" target="_blank" style={{ outline: 'none' }}><div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" style={{ backgroundImage: "url('#wp-content/themes/cruip-2/dist/images/x-pasquale.jpg')" }} role="img" aria-label="Pasquale's profile image">
                    </div>
                    </a>
                      <a className="group relative w-7 h-7 overflow-hidden rounded-full border-2 border-white z-10" href="https://x.com/DavidePacilio" target="_blank" style={{ outline: 'none' }}>
                        <img className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" src="https://cruip.com/wp-content/themes/cruip-2/dist/images/x-davide.jpg" alt="Davide's profile image" width="24" height="24" decoding="async" loading="lazy" /> </a> </span>
                    </li> */}
                    <li> <a className="text-gray-500 hover:underline" href="#newsletter/" style={{ outline: 'none' }}>Newsletter</a>
                    </li>
                    <li> <a className="text-gray-500 hover:underline" href="#about-us/" style={{ outline: 'none' }}>About us</a>
                    </li>
                    <li> <a className="text-gray-500 hover:underline" href="#terms/" style={{ outline: 'none' }}>Terms &amp; License</a>
                    </li>
                    <li> <a className="text-gray-500 hover:underline" href="#privacy-policy/" style={{ outline: 'none' }}>Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer >
      </div >
    </>
  );
}
