export async function GET(_request: Request): Promise<Response> {
    await new Promise((resolve) => setTimeout(resolve, 500)) // add delay like real api
    interface MonthData {
        month: string // Adjust type based on actual data (e.g., "January", 1, etc.)
        [key: string]: any // Other possible properties for a month
    }

    interface YearData {
        [year: string]: MonthData[] // A year maps to an array of month data
    }

    const data: YearData[] = [
        {
            '2023': [
                {
                    month: 'January',
                    total_users: 340,
                    monthly_revenue: 880000,
                    active_subscriptions: 75,
                    bounce_rate: 15.6,
                },
                {
                    month: 'February',
                    total_users: 350,
                    monthly_revenue: 900000,
                    active_subscriptions: 78,
                    bounce_rate: 15.8,
                },
                {
                    month: 'March',
                    total_users: 360,
                    monthly_revenue: 920000,
                    active_subscriptions: 80,
                    bounce_rate: 16.0,
                },
                {
                    month: 'April',
                    total_users: 370,
                    monthly_revenue: 940000,
                    active_subscriptions: 82,
                    bounce_rate: 16.2,
                },
                {
                    month: 'May',
                    total_users: 380,
                    monthly_revenue: 960000,
                    active_subscriptions: 85,
                    bounce_rate: 16.4,
                },
                {
                    month: 'June',
                    total_users: 390,
                    monthly_revenue: 980000,
                    active_subscriptions: 88,
                    bounce_rate: 16.5,
                },
                {
                    month: 'July',
                    total_users: 400,
                    monthly_revenue: 1000000,
                    active_subscriptions: 90,
                    bounce_rate: 16.7,
                },
                {
                    month: 'August',
                    total_users: 410,
                    monthly_revenue: 1020000,
                    active_subscriptions: 92,
                    bounce_rate: 16.8,
                },
                {
                    month: 'September',
                    total_users: 420,
                    monthly_revenue: 1040000,
                    active_subscriptions: 95,
                    bounce_rate: 17.0,
                },
                {
                    month: 'October',
                    total_users: 430,
                    monthly_revenue: 1060000,
                    active_subscriptions: 97,
                    bounce_rate: 17.2,
                },
                {
                    month: 'November',
                    total_users: 440,
                    monthly_revenue: 1080000,
                    active_subscriptions: 100,
                    bounce_rate: 17.3,
                },
                {
                    month: 'December',
                    total_users: 450,
                    monthly_revenue: 1100000,
                    active_subscriptions: 102,
                    bounce_rate: 17.5,
                },
            ],
            '2024': [
                {
                    month: 'January',
                    total_users: 460,
                    monthly_revenue: 1120000,
                    active_subscriptions: 105,
                    bounce_rate: 17.6,
                },
                {
                    month: 'February',
                    total_users: 1000,
                    monthly_revenue: 1140000,
                    active_subscriptions: 500,
                    bounce_rate: 17.8,
                },
                {
                    month: 'March',
                    total_users: 1380,
                    monthly_revenue: 1160000,
                    active_subscriptions: 750,
                    bounce_rate: 18.0,
                },
                {
                    month: 'April',
                    total_users: 2000,
                    monthly_revenue: 1180000,
                    active_subscriptions: 880,
                    bounce_rate: 18.2,
                },
                {
                    month: 'May',
                    total_users: 2304,
                    monthly_revenue: 1200000,
                    active_subscriptions: 1500,
                    bounce_rate: 18.4,
                },
                {
                    month: 'June',
                    total_users: 2555,
                    monthly_revenue: 1220000,
                    active_subscriptions: 2300,
                    bounce_rate: 18.5,
                },
                {
                    month: 'July',
                    total_users: 3244,
                    monthly_revenue: 1240000,
                    active_subscriptions: 3000,
                    bounce_rate: 18.7,
                },
                {
                    month: 'August',
                    total_users: 3789,
                    monthly_revenue: 1260000,
                    active_subscriptions: 3500,
                    bounce_rate: 18.8,
                },
                {
                    month: 'September',
                    total_users: 4877,
                    monthly_revenue: 1280000,
                    active_subscriptions: 4000,
                    bounce_rate: 19.0,
                },
                {
                    month: 'October',
                    total_users: 5099,
                    monthly_revenue: 1300000,
                    active_subscriptions: 4700,
                    bounce_rate: 19.2,
                },
                {
                    month: 'November',
                    total_users: 5600,
                    monthly_revenue: 1320000,
                    active_subscriptions: 5100,
                    bounce_rate: 19.3,
                },
                {
                    month: 'December',
                    total_users: 6345,
                    monthly_revenue: 1340000,
                    active_subscriptions: 5700,
                    bounce_rate: 19.5,
                },
            ],
        },
    ]
    const { searchParams } = new URL(_request.url)
    const year = searchParams.get('year')
    const month = searchParams.get('month')

    if (!year || !month) {
        return new Response(
            JSON.stringify({
                data: null,
                status: {
                    code: 1,
                    message_client: 'Year and month parameters are required.',
                },
            }),
            {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            },
        )
    }

    function findData(year: any, month: any) {
        // Find the object for the specified year

        //eslint-disable-next-line
        const yearData: any = data[0][year] // Access the object for the given year
        if (!yearData) return null

        // Find the month within the year
        const monthData = yearData.find((entry: any) => entry.month === month)
        return {
            selected_year: {
                year: year,
                ...monthData,
            },
            //eslint-disable-next-line
            all_years: data[0][year],
        }
    }

    const stats = findData(year, month)

    if (!stats) {
        return new Response(
            JSON.stringify({
                data: null,
                status: {
                    code: 1,
                    message_client: `Data for ${month} ${year} not found.`,
                },
            }),
            {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            },
        )
    }

    return new Response(
        JSON.stringify({
            data: {
                stats: stats,
            },
            status: {
                code: 0,
                message_client: `Data retrieved successfully for ${month} ${year}.`,
            },
        }),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        },
    )
}
