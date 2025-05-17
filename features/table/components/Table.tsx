"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { ArrowUpDown, Mail, Phone, UserIcon } from "lucide-react";
import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const columnHelper = createColumnHelper<User>();

const columns = [
  // ID Column
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <UserIcon className="mr-2" size={16} />
        ID
      </span>
    ),
  }),

  // Name Column
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <UserIcon className="mr-2" size={16} />
        NAME
      </span>
    ),
  }),

  // Email Column

  columnHelper.accessor("email", {
    //    johndoe@example.com
    //    janesmith@example.com
    //    michaeljohnson@example.com
    //    info.getValue(),
    cell: (info) => (
      <span className="text-blue-600 italic">{info.getValue()}</span>
    ),

    //
    header: () => (
      <span className="flex items-center">
        <Mail className="mr-2" size={16} />
        Email
      </span>
    ),
  }),

  // Phone Column

  columnHelper.accessor("phone", {
    cell: (info) => info.getValue(),
    header: () => (
      <span className="flex items-center">
        <Phone className="mr-2" size={16} />
        Phone
      </span>
    ),
  }),
];

const Table = ({ initialData }: { initialData: User[] }) => {
  const [data, setData] = useState<User[]>(initialData);

  const table = useReactTable<User>({
    data: data,
    columns: columns,

    // არსებული data და სვეტები სწორად გაანწილოს ჩვენს table-ში
    getCoreRowModel: getCoreRowModel(),
  });

  console.log(table.getRowModel());

  return (
    <div className="flex flex-col mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl min-h-screen">
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="divide-y divide-gray-200 min-w-full">
          <thead className="bg-gray-50">
            {/* <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
            </tr> */}

            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 font-medium text-gray-500 text-xs text-left uppercase tracking-wider"
                  >
                    <div className="flex items-center">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      <ArrowUpDown className="ml-2" size={14} />
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 text-gray-500 text-sm whitespace-nowrap"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
