import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

import './Table.css'
import React from "react";

export default function Table({
    data,
    columns,
    className,
    isSidebarTable,
    isAuditHistoryTable,
    isTransactionDetailsTable,
}) {
    return (
        <div className={className} style={{width:'100%'}}>
            <table
                className={`${isSidebarTable ? '' : 'tableSection'} ${className
                    }`}
            >
                <thead className="sticky top-0 z-10">
                    <TableHeader
                        isTransactionDetailsTable={isTransactionDetailsTable}
                        isAuditHistoryTable={isAuditHistoryTable}
                        isSidebarTable={isSidebarTable}
                        columns={columns}
                    />
                </thead>
                <tbody className="relative">
                    <TableRow
                        isTransactionDetailsTable={isTransactionDetailsTable}
                        isAuditHistoryTable={isAuditHistoryTable}
                        isSidebarTable={isSidebarTable}
                        data={data}
                        columns={columns}
                    />
                </tbody>
            </table>
        </div>
    );
}