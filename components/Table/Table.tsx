import React from "react";
import { Table as AntTable } from "antd";
import { PaginationConfig } from "@/interfaces"

interface TableData {
    columns: Array<any>;
    dataSource: Array<any>;
    pagination?: PaginationConfig;
    className?: string;
}
export default function Table({ columns, dataSource, pagination, className }: TableData) {
    return (
        // <div >
        <AntTable pagination={pagination} className="w-100 bg-white" columns={columns} dataSource={dataSource}></AntTable>
        // </div>
    )
}
