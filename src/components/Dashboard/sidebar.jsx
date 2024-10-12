import webRoutes from '@/constants/webRoutes';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Sidebar() {
    const currentPath = usePathname();
    const sidebarLinks = [
        { title: 'Start', },
        {
            label: 'Dashboard',
            link: '/dashboard',
            icon: 'flaticon-home'
        },
        {
            label: 'My Works',
            link: '',
            icon: 'flaticon-document'
        },
        {
            label: 'Message',
            link: '',
            icon: 'flaticon-chat'
        },
        {
            label: 'Reviews',
            link: '',
            icon: 'flaticon-review'
        },
        {
            label: 'Payouts',
            link: '',
            icon: 'flaticon-dollar'
        },
        { title: 'Account', },
        {
            label: 'My Profile',
            link: webRoutes.userProfile,
            icon: 'flaticon-photo'
        },
        {
            label: 'Logout',
            link: '',
            icon: 'flaticon-logout'
        }
    ]
    return (
        <div className="dashboard__sidebar d-none d-lg-block">
            <div className="dashboard_sidebar_list">
                {sidebarLinks.map((sidebarLink) => {

                    return sidebarLink.title
                        ? (<p key={sidebarLink.title} className="fz15 fw400 ff-heading pl30">{sidebarLink.title}</p>)
                        : (<div key={sidebarLink.title} className="sidebar_list_item mb-1">
                            <Link className={`items-center ${currentPath == sidebarLink.link && '-is-active'}`} href={sidebarLink.link}
                            ><i className={`${sidebarLink.icon} mr15`}></i>{sidebarLink.label}
                            </Link>
                        </div>)
                })
                }

            </div>
        </div >
    )
}
