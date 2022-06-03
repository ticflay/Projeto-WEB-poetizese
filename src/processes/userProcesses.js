import { apiGet, apiPatch, apiPut } from "./helpers/api";
import { normalize, schema } from "normalizr";
import { getSession } from "./sessionProcesses";

const currentUserSchema = new schema.Entity("currentUser");
const userSchema = new schema.Entity("users");

export const fetchCurrentUser = (dispatch) => {
  const session = getSession();
  const id = session?.headers?.CurrentUserId;
  apiGet(`https://poetizese-api.herokuapp.com/api/v1/users/${id}`).then(
    (response) => {
      dispatch({
        type: "CURRENT_USER_FETCHED",
        currentUser: response.body,
      });
    }
  );
};

export const updateCurrentUser = (values, dispatch) => {
  console.log(values);
  const session = getSession();
  const id = session?.headers?.CurrentUserId;
  apiPut(`https://poetizese-api.herokuapp.com/api/v1/users/${id}`)
    .send(values)
    .then((response) => {
      console.log(response);
      dispatch({
        type: "USER_UPDATED",
        currentUser: response.body,
      });
    });
};

export const fetchUsers = (dispatch) => {
  apiGet(`https://poetizese-api.herokuapp.com/api/v1/users`).then(
    (response) => {
      dispatch({
        type: "USERS_FETCHED",
        ...normalize(response.body, new schema.Array(userSchema)),
      });
    }
  );
};
