import { combineReducers } from "redux";
import userReducer from "redux/reducers/userReducer";
import postReducer from "redux/reducers/postReducer";

export default combineReducers({
  userReducer,
  postReducer,
});