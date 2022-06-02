const initialState = {};
export default function PostsReducer(state = initialState, action) {
  switch (action.type) {
    case "POST_FETCHED":
    case "POST_UPDATED":
    case "POSTS_FETCHED":
      return { ...state, ...action.entities.posts };
    case "POST_DELETED":
      if (!state[action.postId]) return;
      delete state[action.postId];
      return { ...state };
    default:
      return state;
  }
}
