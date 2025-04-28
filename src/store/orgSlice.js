import { createSlice } from '@reduxjs/toolkit'

const orgSlice = createSlice({
  name: 'organizations',
  initialState: [],
  reducers: {
    setOrganizations: (state, action) => {
      return action.payload
    },
  },
})

export const { setOrganizations } = orgSlice.actions
export default orgSlice.reducer
