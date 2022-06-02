const initialState = {};
export default function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_CREATED":
    case "USER_FETCHED":
      return { ...state, ...action.entities.users };
    case "USER_UPDATED":
    case "USERS_FETCHED":
      return { ...state, ...action.entities.users };
    default:
      return state;
  }
}
