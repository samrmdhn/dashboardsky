'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import { FC, useEffect, useState } from 'react'
import { listMonths } from '@/utils/helper'
import { useAppDispatch } from '@/redux/hook'
import { getHomeDashboardStatsService } from '@/redux/services/homeDashboardStatsService'
import HomeStats from '@/components/molecules/HomeStats'
import HomeCharts from '@/components/molecules/HomeCharts'

type HomeSectionProps = {
    data: any
}
const HomeSection: FC<HomeSectionProps> = (props) => {
    const { data } = props
    // In a real application, you would fetch this data from your backend

    const dispatch = useAppDispatch()

    const [selectedMonth, setSelectedMonth] = useState(data.statistics_data.selected_month)
    const [selectedYear, setSelectedYear] = useState(data.statistics_data.selected_year)

    useEffect(() => {
        if (selectedMonth && selectedYear) dispatch(getHomeDashboardStatsService(selectedYear, selectedMonth))
    }, [data, selectedMonth, selectedYear])

    return (
        <>
            <div className="mb-3">
                <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
                <p className="text-sm text-muted-foreground">{data.description}</p>
            </div>

            <div className="flex items-center justify-end my-4 space-x-4">
                <div>Sort by</div>
                <Select value={selectedYear} onValueChange={(value) => setSelectedYear(value)}>
                    <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="Select a year" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {data.statistics_data.years.map((year: string, index: number) => {
                                return (
                                    <SelectItem key={index} value={year}>
                                        {year}
                                    </SelectItem>
                                )
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select value={selectedMonth} onValueChange={(value) => setSelectedMonth(value)}>
                    <SelectTrigger className="w-[110px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {listMonths.map((month: string, index) => {
                                return (
                                    <SelectItem key={index} value={month}>
                                        {month}
                                    </SelectItem>
                                )
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <HomeStats />

            <HomeCharts />
        </>
    )
}

export default HomeSection
