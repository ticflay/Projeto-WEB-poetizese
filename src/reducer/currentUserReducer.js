export default function currentUserReducer(state = null, action) {
  switch (action.type) {
    case "AUTHORIZATION_FETCHED":
    case "AUTHORIZATION_REMOVED":
      return action.currentUserId;
    case "CURRENT_USER_FETCHED":
      return action.currentUser;
    default:
      return state;
  }
}
