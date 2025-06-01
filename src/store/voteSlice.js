import { createSlice } from "@reduxjs/toolkit"

const votesSlice = createSlice({
    name: 'votes',
    initialState: [],
    reducers: {
      setVotes: (state, action) => action.payload,
    },
  })
  
  export const { setVotes } = votesSlice.actions
  export default votesSlice.reducer
  