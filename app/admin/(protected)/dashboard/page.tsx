import { TableCellsIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Dashboard() {
    return (
        <div className='flex flex-col gap-2'>
            <div className="flex w-full">
                <div className="flex-1 p-4">
                    <div className="bg-neutral-800 rounded-md p-4">
                        <b className='block pb-2'> Total Products</b>
                        <span>100</span>
                    </div>
                </div>
                <div className="flex-1 p-4">
                    <div className="bg-neutral-800 rounded-md p-4">
                        <b className='block pb-2'>Total Purchase</b>
                        <span>$1,000</span>

                    </div>
                </div>
            </div>

        </div>
    )
}
