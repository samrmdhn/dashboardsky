import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Users, DollarSign, CreditCard, Activity } from 'lucide-react'

export const HomeStatsSkeleton = () => {
    const data = [
        { title: 'Total Users', value: '', icon: Users },
        { title: 'Monthly Revenue', value: '', icon: DollarSign },
        { title: 'Active Subscriptions', value: '', icon: CreditCard },
        { title: 'Bounce Rate', value: '', icon: Activity },
    ]

    return (
        <>
            {data.map((stat, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-8 w-[80px]" />
                    </CardContent>
                </Card>
            ))}
        </>
    )
}
