'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { getHomeDashboardService } from '@/redux/services/homeDashboardService'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import UsersSection from '@/components/template/UsersSection'

export default function UsersDashboard() {
    const { data, loading } = useAppSelector((state) => state.home_dashboard)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getHomeDashboardService())
    }, [])

    return (
        <section>
            <Breadcrumb className="mb-3">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">
                            <span className="text-bolder">Dashboard</span>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">
                            <span className="text-bolder">Users</span>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <UsersSection data={data} />
        </section>
    )
}
