import React from "react";
import ReactDOM from "react-dom";
import { compose, createStore } from "redux";
import { Provider } from "react-redux";
import appReducer from "./reducer/appReducer";
import { getSession } from "./processes/sessionProcesses";
import ErrorBoundary from "./ErrorBoundary";
import RoutesContainer from "./routes/RoutesContainer";
import applyGlobalStyles from "./applyGlobalStyles";

function applyDevTools(devTools) {
  return devTools && process.env.NODE_ENV === "development"
    ? devTools()
    : (f) => f;
}

const accessToken = getSession()?.headers?.Authorization ?? null;
const currentUserId = getSession()?.headers?.CurrentUserId ?? null;
const initialState = { accessToken, currentUserId };

const store = createStore(
  appReducer(),
  initialState,
  compose(applyDevTools(window.__REDUX_DEVTOOLS_EXTENSION__))
);

applyGlobalStyles();

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <RoutesContainer />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
