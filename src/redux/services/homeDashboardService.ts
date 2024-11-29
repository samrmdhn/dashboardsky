import { getHomeDashboard } from '@/services/homeDashboard'

import { getHomeDashboardAction, getHomeDashboardSuccessAction, getHomeDashboardErrorAction } from '../actions'

import { AppDispatch } from '../store'

export const getHomeDashboardService = () => {
    return async (dispatch: AppDispatch) => {
        await dispatch(getHomeDashboardAction())
        return getHomeDashboard()
            .then((res) => {
                if (res.data.status.code === 0) {
                    dispatch(getHomeDashboardSuccessAction(res.data))
                } else {
                    dispatch(
                        getHomeDashboardErrorAction({
                            status: res.data.status,
                        }),
                    )
                }
            })
            .catch((err) => {
                dispatch(
                    getHomeDashboardErrorAction({
                        status: {
                            code: 1,
                            message_client: `[ERROR]: ${err}`,
                        },
                    }),
                )
            })
    }
}
