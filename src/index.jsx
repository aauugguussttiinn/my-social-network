import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "styles/index.scss";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import rootReducer from "redux/reducers"
import userReducer from "redux/reducers/userReducer";

const store = createStore(
  userReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);