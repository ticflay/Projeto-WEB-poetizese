export default function authorizationReducer(state = null, action) {
  switch (action.type) {
    case "AUTHORIZATION_FETCHED":
    case "AUTHORIZATION_REMOVED":
      return action.authorization;
    default:
      return state;
  }
}
