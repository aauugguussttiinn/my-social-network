import { CREATE_USER, LOGIN_USER } from "redux/actions/userActions";

const userInitialState = {};

export default function userReducer(state = userInitialState, action) {

  switch (action.type) {
    case CREATE_USER:
      return [action.payload, ...state];
    case LOGIN_USER:
      return [action.payload, ...state];
    default:
      return state;
  }
};