import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions"
const initialState = {
  favorites: {
    data: [],
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          data: [...state.favorites.data, action.payload],
        },
      }
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          data: state.favorites.data.filter((job, i) => i !== action.payload),
        },
      }
    default:
      return state
  }
}
export default mainReducer
