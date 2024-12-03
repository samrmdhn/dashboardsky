import { apiRequest } from '@/utils/api'

export const getHomeDashboard = () =>
    apiRequest({
        method: 'GET',
        url: '/api/v1/home',
    })
