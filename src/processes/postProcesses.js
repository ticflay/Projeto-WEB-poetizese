import { normalize, schema } from "normalizr";
import { apiGet } from "./helpers/api";

const postSchema = new schema.Entity("posts");

export function fetchPosts(dispatch) {
  apiGet("https://potizese-api.herokuapp.com/posts").then((resp) => {
    dispatch({
      type: "POSTS_FETCHED",
      ...normalize(resp.body, new schema.Array(postSchema)),
    });
  });
}
