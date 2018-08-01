import fetch from "isomorphic-fetch"

export function fetchHouses() {
  return async dispatch => {
    dispatch(fetchHousesRequest())
    const response = await fetch('https://dome.now.sh/api/houses')
    if (response.ok) {
      const houses = await response.json()
      dispatch(fetchHousesSuccess(houses))
    } else {
      const err = response.statusText.toLowerCase()
      dispatch(fetchHousesFailure(err))
    }
  }
}

export const FETCH_HOUSES_REQUEST = "FETCH_HOUSES_REQUEST"
function fetchHousesRequest() {
  return {
    type: FETCH_HOUSES_REQUEST
  }
}

export const FETCH_HOUSES_SUCCESS = "FETCH_HOUSES_SUCCESS"
function fetchHousesSuccess(houses) {
  return {
    type: FETCH_HOUSES_SUCCESS,
    houses
  }
}

export const FETCH_HOUSES_FAILURE = "FETCH_HOUSES_FAILURE"
function fetchHousesFailure(error) {
  return {
    type: FETCH_HOUSES_FAILURE,
    error
  }
}