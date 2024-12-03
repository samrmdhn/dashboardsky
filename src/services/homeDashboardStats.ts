import { apiRequest } from '@/utils/api'

export const getHomeDashboardStats = (year: string, month: string) =>
    apiRequest({
        method: 'GET',
        apiVersion: 'v1',
        url: '/api/v1/home/stats',
        params: {
            year,
            month,
        },
    })
