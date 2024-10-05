import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function NavBar({ menus }: { menus: NavMenu[] }) {
    return (
        <nav className="hidden sm:flex sm:grow">
            <ul className="flex grow justify-end flex-wrap items-center text-sm">
                {
                    menus.map((menu) => (
                        <li className="ml-6 flex gap-1.5 items-start">
                            <Link href={menu.link} className="block font-medium text-gray-800 hover:underline" style={{ outline: 'none' }}>{menu.title}</Link>
                            {!!menu.notice &&
                                <span className="uppercase text-emerald-500 text-[10px] font-semibold">{menu.notice}</span>
                            }
                        </li>)
                    )
                }
            </ul>
        </nav>
    )
}
