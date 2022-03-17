import { normalize, schema } from "normalizr";
import { apiGet, apiPost } from "./helpers/api";

const postSchema = new schema.Entity("posts");

export function fetchPosts(dispatch) {
  apiGet("https://poetizese-api.herokuapp.com/posts").then((resp) => {
    dispatch({
      type: "POSTS_FETCHED",
      ...normalize(resp.body, new schema.Array(postSchema)),
    });
  });
}

export function createPost(values, dispatch, props) {
  apiPost("https://poetizese-api.herokuapp.com/posts")
    .send(values)
    .then((resp) => {
      dispatch({
        type: "POST_FETCHED",
        ...normalize(resp.body, postSchema),
      });
      props.reset();
    });
}
