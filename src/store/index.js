import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import orgReducer from './orgSlice'
import inviteReducer from './inviteSlice'
import voteReducer from './voteSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    org: orgReducer,
    invite: inviteReducer,
    vote: voteReducer,
  },
})
