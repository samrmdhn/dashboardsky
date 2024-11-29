import { getHomeDashboardStats } from '@/services/homeDashboardStats'

import {
    getHomeDashboardStatsAction,
    getHomeDashboardStatsSuccessAction,
    getHomeDashboardStatsErrorAction,
} from '../actions'

import { AppDispatch } from '../store'

export const getHomeDashboardStatsService = (year: string, month: string) => {
    return async (dispatch: AppDispatch) => {
        await dispatch(getHomeDashboardStatsAction())
        return getHomeDashboardStats(year, month)
            .then((res) => {
                if (res.data.status.code === 0) {
                    dispatch(getHomeDashboardStatsSuccessAction(res.data))
                } else {
                    dispatch(
                        getHomeDashboardStatsErrorAction({
                            status: res.data.status,
                        }),
                    )
                }
            })
            .catch((err) => {
                dispatch(
                    getHomeDashboardStatsErrorAction({
                        status: {
                            code: 1,
                            message_client: `[ERROR]: ${err}`,
                        },
                    }),
                )
            })
    }
}
