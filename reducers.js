const initialState = {
  counter: 0,
  posts: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      }
    case 'INCREMENT_IF_ODD':
      return {
        ...state,
        counter: state.counter % 2 !== 0 ? state.counter + 1 : state.counter,
      }
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }
    case 'FETCH_POSTS_SUCCEEDED':
      return { ...state, posts: action.data}
    default:
      return state
  }
}
