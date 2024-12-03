import { apiRequest } from '@/utils/api'

export const postAuthLogin = ({ username, password }: { username: string; password: string }) =>
    apiRequest({
        method: 'POST',
        url: `/api/v1/auth/login`,
        data: { username, password },
    })
