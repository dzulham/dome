import actions from "../actions"

const { FETCH_HOUSES_REQUEST, FETCH_HOUSES_SUCCESS, FETCH_HOUSES_FAILURE } = actions.houses

const houses = (state =
  {
    isFetching: false,
    error: null,
    data: []
  }
  , action) => {

  switch (action.type) {
    case FETCH_HOUSES_REQUEST:
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
    case FETCH_HOUSES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default: return state
  }
}

export const isFetching = (state) => state.isFetching
export const isError = (state) => state.error 
export const getHouses = (state) => state.data

export default houses