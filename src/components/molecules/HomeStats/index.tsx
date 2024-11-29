import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppSelector } from '@/redux/hook'
import { Users, DollarSign, CreditCard, Activity } from 'lucide-react'
import { HomeStatsSkeleton } from '../HomeStatsSkeleton'

const HomeStats = () => {
    const { data, loading } = useAppSelector((state) => state.home_dashboard_stats)

    const [stats, setStats] = useState([
        { title: 'Total Users', value: '', icon: Users },
        { title: 'Monthly Revenue', value: '', icon: DollarSign },
        { title: 'Active Subscriptions', value: '', icon: CreditCard },
        { title: 'Bounce Rate', value: '', icon: Activity },
    ])

    useEffect(() => {
        if (!loading && data) {
            setStats([
                { title: 'Total Users', value: data?.stats?.selected_year?.total_users, icon: Users },
                { title: 'Monthly Revenue', value: data?.stats?.selected_year?.monthly_revenue, icon: DollarSign },
                {
                    title: 'Active Subscriptions',
                    value: data?.stats?.selected_year?.active_subscriptions,
                    icon: CreditCard,
                },
                { title: 'Bounce Rate', value: data?.stats?.selected_year?.bounce_rate, icon: Activity },
            ])
        }
    }, [data, loading])

    return (
        <div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
                {loading ? (
                    <HomeStatsSkeleton />
                ) : (
                    stats &&
                    stats.map((stat) => (
                        <Card key={stat.title}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                                <stat.icon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    )
}

export default HomeStats
