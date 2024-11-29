import { GET_HOME_DASHBOARD, GET_HOME_DASHBOARD_SUCCESS, GET_HOME_DASHBOARD_FAILED } from '../types'

const initialState = {
    data: null,
    meta: null,
    error: false,
    loading: false,
    status: null,
}
// eslint-disable-next-line
const homeDashboardReducers = (state: any = initialState, action: any) => {
    switch (action.type) {
        case GET_HOME_DASHBOARD:
            return {
                ...state,
                loading: true,
            }
        case GET_HOME_DASHBOARD_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                status: action.payload.status,
            }
        case GET_HOME_DASHBOARD_FAILED:
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

export default homeDashboardReducers
