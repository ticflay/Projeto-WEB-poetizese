import { createSelector } from "reselect";

const getPosts = (state) => state.entities.posts;

export const getAllPosts = createSelector(getPosts, (posts) =>
  Object.values(posts)
);
