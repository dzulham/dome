import houses, * as Houses from "./houses"
import users, * as Users from "./users"
import { combineReducers } from "redux"

const rootReducer = combineReducers({ houses, users })

export const isLoading = (state) => {
  return Houses.isFetching(state.houses) || Users.isFetching(state.users)
}

export const hasError = (state) => {
  return Houses.isError(state.houses) || Users.isError(state.users)
}

export const mapHouseWithUsers = (state) => {
  const houses = Houses.getHouses(state.houses)
  const users = Users.getUsers(state.users)
  return houses.map((house) => {
    const user = users.find(u => u.id === house.ownerId)
    return { ...house, user }
  })
}

export default rootReducer