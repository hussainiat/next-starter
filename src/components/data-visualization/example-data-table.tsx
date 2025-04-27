"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"

import { DataTable, DataTableColumnHeader } from "@/components/data-visualization/data-table"
import { Badge } from "@/components/ui/badge"

type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  date: string
}

const data: Payment[] = [
  {
    id: "p_1",
    amount: 100.0,
    status: "success",
    email: "user1@example.com",
    date: "2023-11-14",
  },
  {
    id: "p_2",
    amount: 125.0,
    status: "pending",
    email: "user2@example.com",
    date: "2023-11-15",
  },
  {
    id: "p_3",
    amount: 75.5,
    status: "processing",
    email: "user3@example.com",
    date: "2023-11-16",
  },
  {
    id: "p_4",
    amount: 50.0,
    status: "failed",
    email: "user4@example.com",
    date: "2023-11-17",
  },
  {
    id: "p_5",
    amount: 200.0,
    status: "success",
    email: "user5@example.com",
    date: "2023-11-18",
  },
]

export function ExampleDataTable() {
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "id",
      header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />,
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Amount" />
      ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)

        return <div className="font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = row.getValue("status") as string

        return (
          <Badge
            variant={
              status === "success"
                ? "success"
                : status === "pending"
                ? "outline"
                : status === "processing"
                ? "secondary"
                : "destructive"
            }
          >
            {status}
          </Badge>
        )
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
    },
    {
      accessorKey: "date",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Date" />
      ),
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Payments</h2>
      </div>
      <DataTable columns={columns} data={data} searchKey="email" />
    </div>
  )
}