import { GET_HOME_DASHBOARD_STATS, GET_HOME_DASHBOARD_STATS_SUCCESS, GET_HOME_DASHBOARD_STATS_FAILED } from '../types'

const initialState = {
    data: null,
    meta: null,
    error: false,
    loading: false,
    status: null,
}
// eslint-disable-next-line
const homeDashboardStatsReducers = (state: any = initialState, action: any) => {
    switch (action.type) {
        case GET_HOME_DASHBOARD_STATS:
            return {
                ...state,
                loading: true,
            }
        case GET_HOME_DASHBOARD_STATS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                status: action.payload.status,
            }
        case GET_HOME_DASHBOARD_STATS_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                status: action.payload,
            }
        default:
            return state
    }
}

export default homeDashboardStatsReducers
