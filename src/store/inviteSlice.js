import { createSlice } from "@reduxjs/toolkit"

const inviteSlice = createSlice({
    name: 'invitations',
    initialState: [],
    reducers: {
      setInvitations: (state, action) => action.payload,
    },
  })
  
  export const { setInvitations } = inviteSlice.actions
  export default inviteSlice.reducer
  