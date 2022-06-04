import { createSelector } from "reselect";

const getCategories = (state) => state.entities.categories;
const getId = (_, id) => id;

export const getAllCategories = createSelector(getCategories, (categories) =>
  Object.values(categories)
);

export const getCategoryById = createSelector(
  getAllCategories,
  getId,
  (categories, id) => categories.find((category) => category.id === id)
);
