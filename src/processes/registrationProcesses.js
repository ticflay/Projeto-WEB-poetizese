import { normalize, schema } from "normalizr";
import { apiPost } from "./helpers/api";

const userSchema = new schema.Entity("users");

export const signUp = (values, dispatch, props) => {
  apiPost("api/v1/users")
    .send(values)
    .then((resp) => {
      dispatch({
        type: "USER_CREATED",
        ...normalize(resp.body, new schema.Array(userSchema)),
      });
    });
};
