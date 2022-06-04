import { createSelector } from "reselect";

export const currentUser = (state) => state.currentUser;

export const getAllUsers = (state) => state.entities.users;

const getUserId = (_, userId) => userId;

export const getUserById = createSelector(
  getUserId,
  getAllUsers,
  (id, users) => users[id]
);
