import fetch from "isomorphic-fetch"

export function fetchHouses() {
  return (dispatch) => {
    dispatch(fetchHousesRequest())
    fetch('https://dome.now.sh/api/houses')
      .then(
        response => {
          if (!response.ok) {
            throw Error(response.status);
          }
          return response.json()
        }
      )
      .then(houses => dispatch(fetchHousesSuccess(houses))
      )
      .catch(error => {
        const err = String(error).toLowerCase()
        dispatch(fetchHousesFailure(err))
      }
    )
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