'use client'
import { ArrowRightIcon, WalletIcon } from "@heroicons/react/24/outline";
import { Button } from "antd";
import NavBar from "components/navbar";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

// export const metadata = {
//   description: 'Web3 Artisans.',
//   openGraph: {
//     type: 'website'
//   }
// };

export default function HomePage() {
  const menus: NavMenu[] = [
    {
      title: 'View Artisan',
      link: '/artisans'
    }
  ];
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  return (
    <>
      <div className="relative overflow-hidden supports-[overflow:clip]:overflow-clip flex flex-col min-h-screen">
        <header id="site-header" className="absolute top-2 md:top-6 w-full z-30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between gap-3 h-14 rounded-2xl px-3 backdrop-blur-sm bg-white bg-opacity-80">
              <div> <a className="block" href="https://cruip.com/" rel="home" style={{ outline: 'none' }}> <span className="sr-only">Cruip</span>
                <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path d="M28 14a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0" fill="#D1D5DB">
                    </path>
                    <path d="M23.865 23.9a13.932 13.932 0 01-6.377 3.66c-1.115.286-2.284.44-3.488.44a13.893 13.893 0 01-10.512-4.797A13.968 13.968 0 01.048 14c0-3.523 1.298-6.742 3.44-9.203A13.893 13.893 0 0114 0c1.204 0 2.373.154 3.488.44a13.932 13.932 0 016.377 3.66l-4.933 4.95A6.942 6.942 0 0014 7c-3.852 0-6.976 3.134-6.976 7l.002.18C7.122 17.964 10.208 21 14 21c1.926 0 3.67-.784 4.932-2.05l4.933 4.95z" fill="#7E5FFB" fill-rule="nonzero">
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
                        <li className="relative"> <a href="https://cruip.com/x/" className="flex text-gray-800 hover:underline py-2 px-2" style={{ outline: 'none' }}>Cruip X</a> <span className="uppercase text-emerald-500 text-[10px] font-semibold absolute top-2 left-16">New</span>
                        </li>
                        <li> <a href="https://cruip.com/docs/" className="flex text-gray-800 hover:underline py-2 px-2" style={{ outline: 'none' }}>Documentation</a>
                        </li>
                        <li> <a className="flex text-gray-800 hover:underline py-2 px-2" href="https://cruip.com/login/" style={{ outline: 'none' }}>Login</a>
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
              <div className="absolute inset-0 bg-[linear-gradient(145deg,var(--tw-gradient-stops))] from-violet-500/25 to-gray-200/0 to-50% pointer-events-none -z-10" aria-hidden="true"> <svg className="absolute -top-[200px] left-1/2 -translate-x-1/2 -ml-[520px]" xmlns="http://www.w3.org/2000/svg" width="674" height="596" fill="none">
                <g filter="url(#sh1a)">
                  <path fill="url(#sh1b)" fill-rule="evenodd" d="m93 93 488 329.105L303.687 503 93 93Z" clip-rule="evenodd">
                  </path>
                </g>
                <defs>
                  <linearGradient id="sh1b" x1="-2.47" x2="149.396" y1="227.957" y2="586.484" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FB7185" stop-opacity=".32">
                    </stop>
                    <stop offset="1" stop-color="#FB7185" stop-opacity=".01">
                    </stop>
                  </linearGradient>
                  <filter id="sh1a" width="672.843" height="594.843" x=".578" y=".578" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix">
                    </feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                    </feBlend>
                    <feGaussianBlur result="effect1_foregroundBlur_2006_5" stdDeviation="46.211">
                    </feGaussianBlur>
                  </filter>
                </defs>
              </svg>
              </div>
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="relative pt-28 md:pt-36 pb-12 md:pb-16">
                  <div className="max-w-[620px] flex flex-col">
                    <h1 className="h1 mb-5">Artisan Marketplace: Handcrafted for the Web3 Era</h1>
                    <p className="text-lg text-gray-500">Welcome to our Artisan Marketplace, where creativity meets innovation in the world of Web3. We believe in celebrating the craftsmanship of artisans from around the globe, providing a platform that not only showcases unique creations but also embraces the principles of decentralization and community.</p>
                    <div className="-order-1">
                      <div className="inline-flex mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 p-1 pr-3 rounded-full bg-white bg-opacity-80 shadow backdrop-blur">
                          <div className="flex -space-x-2 -ml-0.5">
                            <img decoding="async" fetchPriority="high" className="rounded-full border-2 border-white box-content" src="https://cruip.com/wp-content/themes/cruip-2/dist/images/dev-01.jpg" width="20" height="20" alt="Alessio Santo" /> <img decoding="async" fetchPriority="high" className="rounded-full border-2 border-white box-content" src="https://cruip.com/wp-content/themes/cruip-2/dist/images/dev-02.jpg" width="20" height="20" alt="Arnob Dada" /> <img decoding="async" fetchPriority="high" className="rounded-full border-2 border-white box-content" src="https://cruip.com/wp-content/themes/cruip-2/dist/images/dev-03.jpg" width="20" height="20" alt="Ryan Chew" /> <img decoding="async" fetchPriority="high" className="rounded-full border-2 border-white box-content" src="https://cruip.com/wp-content/themes/cruip-2/dist/images/dev-04.jpg" width="20" height="20" alt="Adrian" />
                          </div>
                          <span>Trusted by <strong className="font-normal text-gray-900">60K+</strong> developers.</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      {!isConnected
                        ? <ConnectKitButton /> :
                        (<Button className=" text-gray-50 bg-zinc-800 p-6 hover:bg-gray-900 group">Visit Dashboard </Button>)}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-[520px] pointer-events-none -z-10" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" width="1132" height="641" fill="none">
                    <g filter="url(#sh2a)" opacity=".48">
                      <circle cx="566" cy="540" r="246" fill="#7E5FFB">
                      </circle>
                    </g>
                    <defs>
                      <filter id="sh2a" width="1132" height="1132" x="0" y="-26" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                        <feFlood flood-opacity="0" result="BackgroundImageFix">
                        </feFlood>
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape">
                        </feBlend>
                        <feGaussianBlur result="effect1_foregroundBlur_2010_54" stdDeviation="160">
                        </feGaussianBlur>
                      </filter>
                    </defs>
                  </svg>
                  </div>
                  <div className="hidden sm:block absolute left-[600px] -top-[196px] -rotate-[16deg] pointer-events-none -z-10">
                    <img decoding="async" fetchPriority="high" className="max-w-none" src="https://cruip.com/wp-content/themes/cruip-2/dist/images/hero-illustration.png" width="1051" height="740" alt="Preview of some Tailwind templates" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pb-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6">
                <div> <a className="inline-block mb-2" href="https://cruip.com/" rel="home" style={{ outline: 'none' }}> <span className="sr-only">Cruip</span>
                  <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                      <path d="M28 14a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0" fill="#D1D5DB">
                      </path>
                      <path d="M23.865 23.9a13.932 13.932 0 01-6.377 3.66c-1.115.286-2.284.44-3.488.44a13.893 13.893 0 01-10.512-4.797A13.968 13.968 0 01.048 14c0-3.523 1.298-6.742 3.44-9.203A13.893 13.893 0 0114 0c1.204 0 2.373.154 3.488.44a13.932 13.932 0 016.377 3.66l-4.933 4.95A6.942 6.942 0 0014 7c-3.852 0-6.976 3.134-6.976 7l.002.18C7.122 17.964 10.208 21 14 21c1.926 0 3.67-.784 4.932-2.05l4.933 4.95z" fill="#7E5FFB" fill-rule="nonzero">
                      </path>
                    </g>
                  </svg> </a>
                  <div className="text-gray-500 text-[13px]">©<a href="https://cruip.com/" style={{ outline: 'none' }}>Cruip<br /> Tailwind CSS templates</a>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm text-gray-900 font-medium mb-3">Company</h4>
                  <ul className="text-sm space-y-3 md:space-y-2">
                    <li className="mb-2 flex items-center"> <a className="text-gray-500 hover:underline" href="https://cruip.com/affiliate-program/" style={{ outline: 'none' }}>Affiliate program</a> <svg className="-mt-0.5 ml-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
                      <path fill="#FACC15" d="m6 0 1.7 4.3L12 6 7.7 7.7 6 12 4.3 7.7 0 6l4.3-1.7L6 0Z" opacity=".8">
                      </path>
                    </svg>
                    </li>
                    <li className="flex items-center gap-2"> <span className="text-gray-500">Follow us on X</span> <span className="flex -space-x-2 -ml-0.5"> <a className="group relative w-7 h-7 overflow-hidden rounded-full border-2 border-white" href="https://x.com/pacovitiello" target="_blank" style={{ outline: 'none' }}><div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" style={{ backgroundImage: "url('https://cruip.com/wp-content/themes/cruip-2/dist/images/x-pasquale.jpg')" }} role="img" aria-label="Pasquale's profile image">
                    </div>
                    </a>
                      <a className="group relative w-7 h-7 overflow-hidden rounded-full border-2 border-white z-10" href="https://x.com/DavidePacilio" target="_blank" style={{ outline: 'none' }}>
                        <img className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" src="https://cruip.com/wp-content/themes/cruip-2/dist/images/x-davide.jpg" alt="Davide's profile image" width="24" height="24" decoding="async" loading="lazy" /> </a> </span>
                    </li>
                    <li> <a className="text-gray-500 hover:underline" href="https://cruip.com/newsletter/" style={{ outline: 'none' }}>Newsletter</a>
                    </li>
                    <li> <a className="text-gray-500 hover:underline" href="https://cruip.com/about-us/" style={{ outline: 'none' }}>About us</a>
                    </li>
                    <li> <a className="text-gray-500 hover:underline" href="https://cruip.com/terms/" style={{ outline: 'none' }}>Terms &amp; License</a>
                    </li>
                    <li> <a className="text-gray-500 hover:underline" href="https://cruip.com/privacy-policy/" style={{ outline: 'none' }}>Privacy Policy</a>
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
