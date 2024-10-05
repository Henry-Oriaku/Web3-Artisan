import { Table } from 'antd';
import React from 'react'


export default function ListProduct() {
    return (
        <div>
            <h3>Product List</h3>
            <Table className='my-5 bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white'></Table>
        </div>
    );
}
