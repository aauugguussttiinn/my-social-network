import { CREATE_USER, LOGIN_USER, LOGOUT_USER } from "redux/actions/userActions";
import Cookies from "js-cookie";
// import rootReducer from "redux/reducers"

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
    default:
      return state;
  }
};