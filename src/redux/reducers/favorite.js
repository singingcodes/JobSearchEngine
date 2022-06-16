import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions"
const initialState = {
  data: [],
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        data: [...state.data, action.payload],
      }
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        // data: state.data.filter((job, i) => i !== action.payload),
        data: [
          ...state.data.slice(0, action.payload),
          ...state.data.slice(action.payload + 1),
        ],
      }
    default:
      return state
  }
}
export default favoriteReducer
