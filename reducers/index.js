import houses from "./houses"
import users from "./users"
import { combineReducers } from "redux"

const rootReducer = combineReducers({ houses, users })

export default rootReducer