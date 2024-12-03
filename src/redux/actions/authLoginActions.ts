import { POST_AUTH_LOGIN, POST_AUTH_LOGIN_SUCCESS, POST_AUTH_LOGIN_FAILED } from '../types'

export const postAuthLoginAction = () => ({
    type: POST_AUTH_LOGIN,
})

// eslint-disable-next-line
export const postAuthLoginSuccessAction = (data: any) => ({
    type: POST_AUTH_LOGIN_SUCCESS,
    payload: data,
})

// eslint-disable-next-line
export const postAuthLoginErrorAction = (data: any) => ({
    type: POST_AUTH_LOGIN_FAILED,
    payload: data,
})
