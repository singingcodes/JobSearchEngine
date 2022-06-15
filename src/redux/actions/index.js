export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"

export const addToFavoritesAction = (job) => ({
  type: ADD_TO_FAVORITES,
  payload: job,
})

export const removeFromFavoritesAction = (jobToRemove) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: jobToRemove,
})
