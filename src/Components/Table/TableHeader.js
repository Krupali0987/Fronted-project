
import './Table.css'
import React from "react";



export function TableHeader({
    columns,
    isTransactionDetailsTable,
    isSidebarTable,
    isAuditHistoryTable,
}) {
    return (
        <tr>
            {columns.map((column, columnIndex) => (
                <th
                    key={`table-head-cell-${columnIndex}`}
                    style={{
                        paddingLeft: isSidebarTable ? '18px' : '',
                        textAlign: isSidebarTable ? 'justify' : 'center',
                        width: column.width,
                    }}
                    className={` ${
                        isSidebarTable
                            ? ''
                            : isAuditHistoryTable
                            ? '!text-center border border-solid   border-t-0 border-[#E3E3E3]   last:border-r-0 thHeader bg-[#DEECAA]'
                            : isTransactionDetailsTable
                            ? '!text-center border border-solid  border-[#E3E3E3]  bg-[#ffffff]   thHeader'
                            : '!text-center border border-solid border-l-0 border-t-0 border-[#E3E3E3]   last:border-r-0 thHeader'
                    } `}
                >
                    {column.title}
                </th>
            ))}
        </tr>
    );
}