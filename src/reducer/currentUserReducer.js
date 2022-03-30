export default function currentUserReducer(state = null, action) {
  switch (action.type) {
    case "AUTHORIZATION_FETCHED":
    case "AUTHORIZATION_REMOVED":
      return action.currentUserId;
    default:
      return state;
  }
}
