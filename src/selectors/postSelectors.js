import { createSelector } from "reselect";
import { currentUser } from "./userSelector";

const getPosts = (state) => state.entities.posts;

export const getAllPosts = createSelector(getPosts, (posts) =>
  Object.values(posts)
);

export const getCurrentUserPosts = createSelector(
  getAllPosts,
  currentUser,
  (posts, user) => {
    console.log(posts);
    return posts.filter((post) => post?.author?.id === user?.id);
  }
);
