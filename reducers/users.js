import actions from "../actions"

const { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED } = actions.users

const users = (state =
  {
    isFetching: false,
    error: null,
    data: []
  }
  , action) => {

  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_USERS_SUCCESS:
      return { 
        ...state,
        isFetching: false,
        data: action.users
      }
    case FETCH_USERS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default: return state
  }
}

export default users;