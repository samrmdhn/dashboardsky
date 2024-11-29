import { apiRequest } from '@/utils/api'

export const getHomeDashboard = () =>
    apiRequest({
        method: 'GET',
        apiVersion: 'v1',
        path: `/home`,
    })
