import { GET_HOME_DASHBOARD, GET_HOME_DASHBOARD_SUCCESS, GET_HOME_DASHBOARD_FAILED } from '../types'

export const getHomeDashboardAction = () => ({
    type: GET_HOME_DASHBOARD,
})

// eslint-disable-next-line
export const getHomeDashboardSuccessAction = (data: any) => ({
    type: GET_HOME_DASHBOARD_SUCCESS,
    payload: data,
})

// eslint-disable-next-line
export const getHomeDashboardErrorAction = (data: any) => ({
    type: GET_HOME_DASHBOARD_FAILED,
    payload: data,
})
