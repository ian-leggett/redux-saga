import {
  GET_USERS_SAGA,
  GET_POSTS_SAGA,
  SET_USERS,
  FILTER_USERS,
  FILTERING_USERS,
  SET_POSTS,
} from '../constants'

export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

export async function getPosts(state) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${state.postsReducer.start}&_limit=${state.postsReducer.limit}`);
  return response.json();
}

export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts,
  }
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  }
}

export function filterUsers(searchString) {
  return {
    type: FILTER_USERS,
    searchString,
  }
}

export function filteringUsers() {
  return {
    type: FILTERING_USERS,
  }
}

//Sagas
export function getUsersSaga() {
  return {
    type: GET_USERS_SAGA,
  }
}

export function getPostsSaga() {
  return {
    type: GET_POSTS_SAGA,
  }
}
