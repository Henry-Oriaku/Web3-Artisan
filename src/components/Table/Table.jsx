import React from "react";
import { Table as AntTable } from "antd";
import { PaginationConfig } from "@/interfaces"


export default function Table({ columns, dataSource, pagination, className }) {
    return (
        // <div >
        <AntTable pagination={pagination} className="w-100 bg-white" columns={columns} dataSource={dataSource}></AntTable>
        // </div>
    )
}
