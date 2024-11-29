import React, { useEffect, useState } from 'react'

import { CartesianGrid, XAxis, Line, LineChart, YAxis, ResponsiveContainer } from 'recharts'
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'
import { useAppSelector } from '@/redux/hook'
import { Skeleton } from '@/components/ui/skeleton'
import HomeSectionDetail from '../HomeSectionDetail'

const chartConfig = {
    total: {
        label: 'Total Users',
        color: '#2563eb',
    },
    active: {
        label: 'Active Subscriptions',
        color: '#60a5fa',
    },
} satisfies ChartConfig

const HomeCharts = () => {
    const { data, loading } = useAppSelector((state) => state.home_dashboard_stats)

    const [chartData, setChartData] = useState([])

    useEffect(() => {
        if (data && data.stats && Array.isArray(data.stats.all_years)) {
            const newData = data.stats.all_years.map((item: any) => ({
                month: item.month,
                total: item.total_users,
                active: item.active_subscriptions,
            }))

            setChartData(newData)
        }
    }, [data])
    return (
        <>
            {chartData && chartData.length > 0 ? (
                <div className="flex space-x-4">
                    <div className="min-h-[100px] w-[50%]">
                        <ChartContainer config={chartConfig}>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis
                                        dataKey="month"
                                        tickFormatter={(value) => value.slice(0, 3)}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis tickLine={false} axisLine={false} />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <ChartLegend content={<ChartLegendContent />} />
                                    <Line
                                        type="monotone"
                                        dataKey="total"
                                        stroke="var(--color-total)"
                                        strokeWidth={2}
                                        dot={false}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="active"
                                        stroke="var(--color-active)"
                                        strokeWidth={2}
                                        dot={false}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-lg font-bold mb-4">Chart Detail</h1>
                        <HomeSectionDetail />
                    </div>
                </div>
            ) : loading ? (
                <>
                    <div className="flex space-x-4">
                        <div className="min-h-[100px] w-[50%]">
                            <Skeleton className="h-[300px] w-full" />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Skeleton className="h-6 w-[150px] mb-4" />

                            <Skeleton className="h-4 w-full mt-4" />
                            <Skeleton className="h-4 w-[80%] mt-2" />
                            <Skeleton className="h-4 w-[90%] mt-2" />
                        </div>
                    </div>
                </>
            ) : null}
        </>
    )
}

export default HomeCharts
