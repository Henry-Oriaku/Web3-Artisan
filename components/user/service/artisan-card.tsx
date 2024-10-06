import { HeartIcon } from '@heroicons/react/24/outline'
// import Image from 'next/image'
import React from 'react'
import classes from '../../../assets/styles/style.module.css'
import { Image } from 'antd'
import Title from 'antd/es/typography/Title'
import Paragraph from 'antd/es/typography/Paragraph'
import Link from 'next/link'
import webRoutes from 'constants/webRoutes'
import './override.css'
export default function ArtisanCard({ artisan }) {
    return (
        <div className={`override-ant-image h-auto sm:w-60 w-full`}>
            <div className="relative w-full">
                <Image className="sm:w-60 w-full h-60 object-cover" alt="Artisan Image" src={artisan.images[0]} />
                <div className='absolute top-5 right-5 h-8 w-8 p-2  bg-white rounded-full'>
                    <HeartIcon />
                </div>
            </div>
            <div className='mt-4'>
                <span className='text-zinc-600 !text-xs !mb-0'>{artisan.category}</span>
                <Link href={webRoutes.viewArtisan(artisan.slug)}>
                    <Paragraph className='mt-0 text-lg'>{artisan.name}</Paragraph>
                </Link>
                <hr />
                <div className="flex justify-between my-3">
                    <div className='flex gap-2 items-center'>
                        <img src={artisan.user.avatar} className='h-8 w-8 rounded-full' />
                        <span className='!text-base !mb-0'>{artisan.user.name}</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='!text-base !mb-0'>${artisan.least_price}</span>
                        <span className='text-zinc-600 !text-base !mb-0'>above</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
