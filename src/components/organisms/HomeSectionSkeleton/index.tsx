'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const HomeSectionSkeleton = () => {
    return (
        <>
            <div className="mb-3">
                <Skeleton className="h-[2.3rem] w-[30%] mb-2" />
                <Skeleton className="h-[1.2rem] w-[20%]" />
            </div>

            <div className="flex items-center justify-end my-4 space-x-4">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-10 w-[80px]" />
                <Skeleton className="h-10 w-[110px]" />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
                {Array(4)
                    .fill(0)
                    .map((_, index) => (
                        <Card key={index}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <Skeleton className="h-4 w-[100px]" />
                                <Skeleton className="h-4 w-4" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-8 w-[80px]" />
                            </CardContent>
                        </Card>
                    ))}
            </div>

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
    )
}

export default HomeSectionSkeleton
