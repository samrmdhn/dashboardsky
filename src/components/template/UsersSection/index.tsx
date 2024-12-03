'use client'
import { FC } from 'react'

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface User {
    id: number
    name: string
    email: string
    sub: string
}

const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', sub: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', sub: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', sub: 'Active' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', sub: 'Active' },
]

type UsersSectionProps = {
    data: any
}
const UsersSection: FC<UsersSectionProps> = () => {
    return (
        <>
            <div className="mb-3">
                <h1 className="text-3xl font-bold mb-2">Users</h1>
                <p className="text-sm text-muted-foreground">Users Subscriptions List</p>

                <div className="container mx-auto py-10">
                    <Table>
                        <TableCaption>A list of users in the system.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead className="text-right">Subscriptions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell className="text-right">{user.sub}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default UsersSection
