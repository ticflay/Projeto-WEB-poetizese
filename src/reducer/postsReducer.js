const initialState = {};
export default function PostsReducer(state = initialState, action) {
  switch (action.type) {
    case "POST_FETCHED":
    case "POST_UPDATED":
    case "POSTS_FETCHED":
      return { ...state, ...action.entities.posts };
    default:
      return state;
  }
}
