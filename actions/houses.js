import fetch from "isomorphic-fetch"

export function fetchHouses() {
  return (dispatch, getState) => {
    dispatch(fetchHousesNew())
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
        const errorString = String(error).toLowerCase()
        dispatch(fetchHousesFailed(errorString))
      }
      );
  };
}

export const FETCH_HOUSES = "FETCH_HOUSES"
function fetchHousesNew() {
  return {
    type: FETCH_HOUSES
  }
}

export const FETCH_HOUSES_SUCCESS = "FETCH_HOUSES_SUCCESS"
function fetchHousesSuccess(houses) {
  return {
    type: FETCH_HOUSES_SUCCESS,
    houses
  }
}

export const FETCH_HOUSES_FAILED = "FETCH_HOUSES_FAILED"
function fetchHousesFailed(error) {
  return {
    type: FETCH_HOUSES_FAILED,
    error
  }
}