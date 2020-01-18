import { SET_POSTS, GET_POSTS_SAGA } from '../constants'

const initialState = {
  start: 0,
  limit: 5,
  posts: [],
}

export default function setBrowserInfo(state = initialState, action) {
  console.log(action.posts)
  switch (action.type) {
    case GET_POSTS_SAGA: 
    return {
      ...state,
      loadingPosts: true,
    }
    case SET_POSTS:
      return {
        ...state,
        limit: state.limit + 5,
        posts: action.posts,
        loadingPosts: false,
      }
    default:
      return state
  }
}
