import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import postsReducer from "./postsReducer";
import authorizationReducer from "./authorizationReducer";
import { reducer as form } from "redux-form";
import currentUserReducer from "./currentUserReducer";

export default function appReducer() {
  return combineReducers({
    entities: combineReducers({
      users: usersReducer,
      posts: postsReducer,
    }),
    form,
    currentUserId: currentUserReducer,
    accessToken: authorizationReducer,
    currentUser: currentUserReducer,
  });
}
