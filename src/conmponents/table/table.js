

import React from "react";
import {useTable} from 'react-table';

export default function Table({data, columns}) {

    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        page, // rows for the table based on the data passed
        prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
        setPageSize,
        pageSize,
        
    } = useTable({
            columns,
             data
        });
    return (
      
        <table {...getTableProps()} style={{
            borderSpacing: 0,
            width: 1080,
            height: 685,
            borderRadius: "5px 5px 0px 0px",
        }}>
            <thead>
            {headerGroups?.map(headerGroup => (
                <tr {...headerGroup?.getHeaderGroupProps()}>
                    {headerGroup?.headers.map(column => (
                        <th
                            {...column?.getHeaderProps()}
                            style={{
                                width: 1080,
                                height: 65,
                                background: "#1AAA8D",

                                color: "#FFFFFF",
                                borderSpacing: 0,
                            }}
                        >
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {page?.map((row, i) => {
                prepareRow(row, i)
                return (
                    <tr {...row.getRowProps()}>
                        {row?.cells.map(cell => {
                            return (
                                <td
                                    {...cell.getCellProps()}
                                    style={{
                                        padding: '10px',
                                        border: 'solid 1px gray',
                                        background: '#FFFFFF',
                                    }}
                                >
                                    {cell.render('Cell')}
                                    {/* {i + 1} */}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value)
                )}
            >
                {[10, 20, 30].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                        Per Page {pageSize}
                    </option>
                ))}
            </select>
            </tbody>
        </table>
     )
}