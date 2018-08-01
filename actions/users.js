import fetch from "isomorphic-fetch"

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    fetch('https://dome.now.sh/api/users')
      .then(
        response => {
          if (!response.ok) {
            throw Error(response.status);
          }
          return response.json()
        }
      )
      .then(users => dispatch(fetchUsersSuccess(users))
      )
      .catch(error => {
        const err = String(error).toLowerCase()
        dispatch(fetchUsersFailed(err))
      }
      );
  };
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
function fetchUsersFailed(error) {
  return {
    type: FETCH_USERS_FAILURE,
    error
  }
}