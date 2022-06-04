const initialState = {};
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "CATEGORIES_FETCHED":
      return { ...state, ...action.entities.categories };
    default:
      return state;
  }
}
