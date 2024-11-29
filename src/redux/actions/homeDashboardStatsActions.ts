import { GET_HOME_DASHBOARD_STATS, GET_HOME_DASHBOARD_STATS_SUCCESS, GET_HOME_DASHBOARD_STATS_FAILED } from '../types'

export const getHomeDashboardStatsAction = () => ({
    type: GET_HOME_DASHBOARD_STATS,
})

// eslint-disable-next-line
export const getHomeDashboardStatsSuccessAction = (data: any) => ({
    type: GET_HOME_DASHBOARD_STATS_SUCCESS,
    payload: data,
})

// eslint-disable-next-line
export const getHomeDashboardStatsErrorAction = (data: any) => ({
    type: GET_HOME_DASHBOARD_STATS_FAILED,
    payload: data,
})
