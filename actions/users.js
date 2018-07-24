import fetch from "isomorphic-fetch"

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersNew())
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
        const errorString = String(error).toLowerCase()
        dispatch(fetchUsersFailed(errorString))
      }
      );
  };
}

export const FETCH_USERS = "FETCH_USERS"
function fetchUsersNew() {
  return {
    type: FETCH_USERS
  }
}

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  }
}

export const FETCH_USERS_FAILED = "FETCH_USERS_FAILED"
function fetchUsersFailed(error) {
  return {
    type: FETCH_USERS_FAILED,
    error
  }
}