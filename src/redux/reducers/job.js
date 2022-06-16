import { GET_JOBS, GET_JOBS_LOADING, GET_JOBS_ERROR } from "../actions"

const initialState = {
  data: [],
  isLoading: true,
  isError: false,
}
const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        data: action.payload,
      }
    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      }
    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: !state.isError,
      }
    default:
      return state
  }
}
export default jobReducer
