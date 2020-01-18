import { SET_USERS, FILTER_USERS, FILTERING_USERS, GET_USERS_SAGA } from '../constants'

const initialState = {
  users: [],
  filteredUsers: [],
  filteringUsers: false,
}

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SAGA: 
    return {
      ...state,
      loadingUsers: true,
    }
    case SET_USERS:
      return {
        ...state,
        users: action.users,
        loadingUsers: false,
      }
    case FILTERING_USERS:
      return {
        ...state,
        filteringUsers: true,
      }
    case FILTER_USERS:
      return {
        ...state,
        filteredUsers: state.users.filter(x =>
          x.name.includes(action.searchString)
        ),
        loaded: true,
      }
    default:
      return state
  }
}
