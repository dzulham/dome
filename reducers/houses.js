import actions from "../actions"

const { FETCH_HOUSES, FETCH_HOUSES_SUCCESS, FETCH_HOUSES_FAILED } = actions.houses

const houses = (state =
  {
    isFetching: false,
    error: null,
    data: []
  }
  , action) => {

  switch (action.type) {
    case FETCH_HOUSES:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_HOUSES_SUCCESS:
      return { 
        ...state,
        isFetching: false,
        data: action.houses
      }
    case FETCH_HOUSES_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default: return state
  }
}

export default houses;