"use client";

import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { Button } from "./Button";

type Medication = {
  name: string;
  dosage: string;
  quantity: number;
  daysSupply: number;
};

const initialData: Medication[] = [
  { name: "Adderall", dosage: "10mg", quantity: 30, daysSupply: 90 },
  { name: "Ibuprofen", dosage: "10mg", quantity: 20, daysSupply: 30 },
];

export default function MedicationTable() {
  const [data, setData] = useState(initialData);

  const handleDelete = (index: number) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };

  const columns: ColumnDef<Medication>[] = [
    {
      accessorKey: "name",
      header: () => "Medication Name",
      cell: ({ getValue }) => (
        <span className='text-left'>{getValue<string>()}</span>
      ),
    },
    {
      accessorKey: "dosage",
      header: () => "Dosage",
      cell: ({ getValue }) => (
        <span className='text-center'>{getValue<string>()}</span>
      ),
    },
    {
      accessorKey: "quantity",
      header: () => "Quantity",
      cell: ({ getValue }) => (
        <span className='text-center'>{getValue<number>()}</span>
      ),
    },
    {
      accessorKey: "daysSupply",
      header: () => "Days Supply",
      cell: ({ getValue }) => (
        <span className='text-center'>{getValue<number>()}</span>
      ),
    },
    {
      id: "actions",
      header: () => "",
      cell: ({ row }) => (
        <Button
          className='w-10 h-10 p-0 rounded-full text-white bg-red-500 hover:bg-red-700'
          onClick={() => handleDelete(row.index)}>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g id='Iconly/Light/Delete'>
              <g id='Delete'>
                <path
                  id='Stroke 1'
                  d='M16.1032 7.89062C16.1032 7.89062 15.6507 13.5031 15.3882 15.8673C15.2632 16.9965 14.5657 17.6581 13.4232 17.679C11.249 17.7181 9.07234 17.7206 6.89901 17.6748C5.79984 17.6523 5.11401 16.9823 4.99151 15.8731C4.72734 13.4881 4.27734 7.89062 4.27734 7.89062'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  id='Stroke 3'
                  d='M17.2567 5.19987H3.125'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  id='Stroke 5'
                  d='M14.5335 5.19998C13.8793 5.19998 13.316 4.73748 13.1877 4.09665L12.9852 3.08331C12.8602 2.61581 12.4368 2.29248 11.9543 2.29248H8.42682C7.94432 2.29248 7.52099 2.61581 7.39599 3.08331L7.19349 4.09665C7.06516 4.73748 6.50182 5.19998 5.84766 5.19998'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
            </g>
          </svg>
        </Button>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='w-full'>
      <table className='w-full'>
        <thead className=''>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className='grid grid-cols-[1.6fr_1fr_2.3fr_0.9fr_60px] '>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className={`  `}>
                  <div
                    className={` ${
                      header.column.getIndex() === 0
                        ? "text-left "
                        : "text-center"
                    } 
                     
                  
                  
                      text-[20px] font-[600] font-sans `}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className=''>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className=' border-b mt-2 h-[70px] grid grid-cols-[1.6fr_1fr_2.3fr_0.9fr_60px] items-center '>
              {row.getVisibleCells().map((cell, index) => (
                <td
                  key={cell.id}
                  className={` ${index === 0 ? "text-left" : "text-center "} 
                  text-[20px] font-[500] font-sans  
                    ${index === 4 ? " flex justify-center  " : ""} `}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
