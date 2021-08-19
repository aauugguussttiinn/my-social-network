import { CREATE_USER, LOGIN_USER, LOGOUT_USER, SET_USER_PROFILE } from "redux/actions/userActions";
import Cookies from "js-cookie";

const userInitialState = {user : ""};
const emptyState = undefined

export default function userReducer(state = userInitialState, action) {

  switch (action.type) {
    case CREATE_USER:
      return [action.payload, ...state];
    case LOGIN_USER:
      Cookies.set("token", action.payload.jwt)
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.jwt,
      };
    case LOGOUT_USER:
      return emptyState;
    case SET_USER_PROFILE:
      return action.payload;
    default:
      return state;
  }
};