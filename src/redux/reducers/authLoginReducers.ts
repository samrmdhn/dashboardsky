import { POST_AUTH_LOGIN, POST_AUTH_LOGIN_SUCCESS, POST_AUTH_LOGIN_FAILED } from '../types'

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
        case POST_AUTH_LOGIN:
            return {
                ...state,
                loading: true,
            }
        case POST_AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                status: action.payload.status,
            }
        case POST_AUTH_LOGIN_FAILED:
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
