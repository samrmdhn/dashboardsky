export async function POST(req: Request): Promise<Response> {
    await new Promise((resolve) => setTimeout(resolve, 500)) // add delay like real api

    const data = await req.json()

    let token = ''

    if (data) {
        switch (data.username) {
            case 'admin':
                token =
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkYXNoYm9hcmRza3kiLCJpYXQiOjE3MzMyMDA3MzgsImV4cCI6MTc2NDczNjczOCwiYXVkIjoiZGFzaGJvYXJkc2t5Iiwic3ViIjoiZGFzaGJvYXJkc2t5IiwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOiJhZG1pbiJ9.TeuOc7HcfR0ZKXexVklQQ-uXm_n9j9HGsXjcvAb9Los'
                break
            case 'staff':
                token =
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkYXNoYm9hcmRza3kiLCJpYXQiOjE3MzMyMDA3MzgsImV4cCI6MTc2NDczNjczOCwiYXVkIjoiZGFzaGJvYXJkc2t5Iiwic3ViIjoiZGFzaGJvYXJkc2t5IiwidXNlcm5hbWUiOiJzdGFmZiIsInJvbGUiOiJzdGFmZiJ9.x_kj2RYUmmu0vGVVVhkuMvozAGfoT76GGrzJMTYbBFM'
                break
        }
    }

    return new Response(
        JSON.stringify({
            data: {
                token: token,
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
