import { apiGet } from "./helpers/api";
import { normalize, schema } from "normalizr";
import { getSession } from "./sessionProcesses";

const categorySchema = new schema.Entity("categories");

export const fetchCategories = (dispatch) => {
  const session = getSession();
  const id = session?.headers?.CurrentUserId;
  apiGet(`api/v1/categories`).then((response) => {
    console.log(response.body);
    dispatch({
      type: "CATEGORIES_FETCHED",
      ...normalize(response.body, new schema.Array(categorySchema)),
    });
  });
};
