import fetch from "isomorphic-fetch"

export function fetchUsers() {
  return async dispatch => {
    dispatch(fetchUsersRequest())
    const response = await fetch('https://dome.now.sh/api/users')
    if (response.ok) {
      const users = await response.json()
      dispatch(fetchUsersSuccess(users))
    } else {
      const err = response.statusText.toLowerCase()
      dispatch(fetchUsersFailure(err))
    }
  }
}

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  }
}

export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"
function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    error
  }
}