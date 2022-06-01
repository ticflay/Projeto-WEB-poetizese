import { apiGet } from "./helpers/api";
import { normalize, schema } from "normalizr";
import { getSession } from "./sessionProcesses";

const currentUserSchema = new schema.Entity("currentUser");

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
