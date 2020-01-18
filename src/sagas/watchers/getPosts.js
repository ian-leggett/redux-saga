import { put, takeLatest, call, select } from 'redux-saga/effects'

import { GET_POSTS_SAGA } from '../../constants'
import { getPosts, setPosts } from '../../actions'

function* workerGetPostsSaga() {
  const state = yield select()
  const posts = yield call(getPosts, state)
  yield put(setPosts(posts))
}

export default function* watchGetPostsSaga() {
  yield takeLatest(GET_POSTS_SAGA, workerGetPostsSaga)
}
