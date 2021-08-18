import { CREATE_USER, LOGIN_USER } from "redux/actions/userActions";
// import { Cookies } from "js-cookie";

const userInitialState = {};

export default function userReducer(state = userInitialState, action) {

  switch (action.type) {
    case CREATE_USER:
      return [action.payload, ...state];
    case LOGIN_USER:
      // Cookies.set("token", action.payload.jwt)
      // ne pas oublier de supprimer le cookie
      // console.log(userInitialState)
      // console.log(action.payload)
      // console.log(state)
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.jwt,
      };
    default:
      return state;
  }
};