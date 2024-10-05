'use client'
import { Button, Input, Upload } from 'antd';
import { validateForm } from 'helpers/validator';
import React, { useEffect } from 'react'
import { useState } from 'react';

export default function AddProduct() {
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        images: []
    });

    function setData(key: string, value: any) {
        setNewProduct({ ...newProduct, [key]: value })
        console.log(newProduct);
        
    }
    useEffect(() => {
        validateForm('submit');
    }
        , [newProduct])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className='py-2'>

                    <input
                        required
                        onChange={(ev) => setData('', ev.target.value)}
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
                    />
                </div>
                <div className='py-2'>

                    <input
                        required
                        onChange={(ev) => setData('', ev.target.value)}
                        type="text"
                        name="price"
                        placeholder="Price"
                        className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
                    />
                </div>
                <div className='py-2'>

                    <textarea
                        required
                        onChange={(ev) => setData('', ev.target.value)}
                        rows={5}
                        name="description"
                        placeholder="Description"
                        className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
                    ></textarea>
                </div>
                <Upload multiple hasControlInside onChange={(event) => setData("images", event.fileList)} className='text-white cursor-pointer'>
                    Upload Image
                </Upload>
                <div className="flex gap-2">
                    <Button id='submit'>Save Product</Button>
                    <Button className='bg-stone-700 text-white hover:text-white'>Cancel</Button>
                </div>
            </div>

        </div>
    );
}
