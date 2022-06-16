export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES"
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES"
export const GET_JOBS = "GET_JOBS"
export const GET_JOBS_LOADING = "GET_JOBS_LOADING"
export const GET_JOBS_ERROR = "GET_JOBS_ERROR"

export const addToFavoritesAction = (job) => ({
  type: ADD_TO_FAVORITES,
  payload: job,
})

export const removeFromFavoritesAction = (jobToRemove) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: jobToRemove,
})

export const getJobsAction = (props) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?company=${props}`
      )
      if (response.ok) {
        let data = await response.json()
        dispatch({
          type: GET_JOBS,
          payload: data.data,
        })
        dispatch({
          type: GET_JOBS_LOADING,
        })
      } else {
        dispatch({
          type: GET_JOBS_LOADING,
        })
        dispatch({
          type: GET_JOBS_ERROR,
        })
      }
    } catch (error) {
      dispatch({
        type: GET_JOBS_LOADING,
      })
      dispatch({
        type: GET_JOBS_ERROR,
      })
    }
  }
}

export const getJobSearchAction = (query) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?search=" +
          query +
          "&limit=10"
      )
      if (response.ok) {
        let data = await response.json()
        console.log(data)

        dispatch({
          type: GET_JOBS,
          payload: data.data,
        })
        dispatch({
          type: GET_JOBS_LOADING,
        })
      } else {
        dispatch({
          type: GET_JOBS_LOADING,
        })
        dispatch({
          type: GET_JOBS_ERROR,
        })
      }
    } catch (error) {
      dispatch({
        type: GET_JOBS_LOADING,
      })
      dispatch({
        type: GET_JOBS_ERROR,
      })
    }
  }
}
