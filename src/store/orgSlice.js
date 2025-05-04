import { createSlice } from '@reduxjs/toolkit'

const orgSlice = createSlice({
  name: 'organizations',
  initialState: [],
  reducers: {
    setOrganizations: (state, action) => {
      return action.payload
    },
    removeOrganization: (state, action) => {
      return state.filter(org => org._id !== action.payload);
    },
  },
})

export const { setOrganizations, removeOrganization } = orgSlice.actions
export default orgSlice.reducer
