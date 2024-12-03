import { configureStore } from '@reduxjs/toolkit'
import homeDashboardReducers from './reducers/homeDashboardReducers'
import homeDashboardStatsReducers from './reducers/homeDashboardStatsReducers'
import authLoginReducers from './reducers/authLoginReducers'

export const store = configureStore({
    reducer: {
        home_dashboard: homeDashboardReducers,
        home_dashboard_stats: homeDashboardStatsReducers,
        auth_login: authLoginReducers,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
