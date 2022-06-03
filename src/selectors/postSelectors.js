import { createSelector } from "reselect";
import { currentUser } from "./userSelector";

const getPosts = (state) => state.entities.posts;
const getUserId = (_, userId) => userId;

export const getAllPosts = createSelector(getPosts, (posts) =>
  Object.values(posts)
);

export const getCurrentUserPosts = createSelector(
  getAllPosts,
  currentUser,
  (posts, user) => {
    return posts.filter((post) => post?.author?.id == user?.id);
  }
);

export const getPostsByUserId = createSelector(
  getAllPosts,
  getUserId,
  (posts, id) => {
    return posts.filter((post) => post?.author?.id == id);
  }
);
