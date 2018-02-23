//import { combineReducers } from 'redux'
import {IS_LOGGED_IN,NEED_TO_LOGOUT,NEED_TO_LOGIN,GET_HOMEDATA,UPDATE_HOMEDATA,SERVER_LINK,GET_TRAINERDATA,UPDATE_TRAINERDATA} from '../actions/actions'

const rootReducer = function UserInfo(state={},action) {
  switch (action.type) {
    case IS_LOGGED_IN:
       return Object.assign({},state,action);
    case NEED_TO_LOGOUT:
       return Object.assign(state,{});
    case NEED_TO_LOGIN:
      return Object.assign({},state, action);
    case GET_HOMEDATA:
      return Object.assign({},state,action);
    case UPDATE_HOMEDATA:
      return Object.assign({},state,action);
      case SERVER_LINK:
      return Object.assign({},state,action);
    case GET_TRAINERDATA:
      return Object.assign({},state,action);
    case UPDATE_TRAINERDATA:
      return Object.assign({},state,action);

    default:
      return state
  }
}


//combineReducers({})

export default rootReducer