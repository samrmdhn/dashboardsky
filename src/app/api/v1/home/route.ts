export async function GET(_request: Request): Promise<Response> {
    await new Promise((resolve) => setTimeout(resolve, 500)) // add delay like real api

    const title = 'Subscription Management'
    const description = 'Manage your subscriptions and track your revenue.'

    return new Response(
        JSON.stringify({
            data: {
                title,
                description,
                statistics_data: {
                    selected_year: '2024',
                    years: ['2023', '2024'],
                    selected_month: 'December',
                },
            },
            status: {
                code: 0,
                message_client: 'Data retrieved successfully',
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
