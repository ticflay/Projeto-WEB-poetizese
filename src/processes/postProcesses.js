import { normalize, schema } from "normalizr";
import { apiGet, apiPost, apiDel, apiPatch } from "./helpers/api";

const postSchema = new schema.Entity("posts");

export function fetchPosts(dispatch) {
  apiGet("api/v1/posts").then((resp) => {
    dispatch({
      type: "POSTS_FETCHED",
      ...normalize(resp.body, new schema.Array(postSchema)),
    });
  });
}

export function createPost(values, dispatch, props) {
  apiPost("api/v1/posts")
    .send(values)
    .then((resp) => {
      dispatch({
        type: "POST_FETCHED",
        ...normalize(resp.body, postSchema),
      });
      props.reset();
    });
}

export function deletePost(dispatch, postId) {
  apiDel(`api/v1/posts/${postId}`).then((response) => {
    dispatch({ type: "POST_DELETED", postId: postId });
  });
}

export function updatePost(values, dispatch, props) {
  apiPatch(`api/v1/posts/${props?.post?.id}`)
    .send(values)
    .then((response) => {
      dispatch({
        type: "POST_UPDATED",
        ...normalize(response.body, postSchema),
      });
    });
}
