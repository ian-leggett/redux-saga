import { all, fork } from 'redux-saga/effects'

import watchGetUsersSaga from './watchers/getUsers'
import watchGetPosts from './watchers/getPosts'

export default function* root() {
  yield all([fork(watchGetUsersSaga), fork(watchGetPosts)])
}
