import { postAuthLogin } from '@/services/authLogin'

import { postAuthLoginAction, postAuthLoginSuccessAction, postAuthLoginErrorAction } from '../actions'

import { AppDispatch } from '../store'

export const postAuthLoginService = ({ username, password }: { username: string; password: string }) => {
    return async (dispatch: AppDispatch) => {
        await dispatch(postAuthLoginAction())
        return postAuthLogin({ username, password })
            .then((res) => {
                if (res.data.status.code === 0) {
                    dispatch(postAuthLoginSuccessAction(res.data))
                } else {
                    dispatch(
                        postAuthLoginErrorAction({
                            status: res.data.status,
                        }),
                    )
                }
            })
            .catch((err) => {
                dispatch(
                    postAuthLoginErrorAction({
                        status: {
                            code: 1,
                            message_client: `[ERROR]: ${err}`,
                        },
                    }),
                )
            })
    }
}
