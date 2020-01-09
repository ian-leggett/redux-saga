import { put, takeEvery, all, call, take } from 'redux-saga/effects'
import axios from 'axios'

export const delay = ms => new Promise(res => setTimeout(res, ms))
export const getData = url => {
  return axios.get(url).then(res => res.data)
}

// ...
function* helloSaga() {
  console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* fetchPosts() {
  while (true) {
    yield take('FETCH_POSTS')
    try {
      const data = yield call(
        getData,
        'https://jsonplaceholder.typicode.com/posts'
      )
      yield put({ type: 'FETCH_POSTS_SUCCEEDED', data })
    } catch (error) {
      yield put({ type: 'FETCH_POSTS_FAILED', error })
    }
  }
}

export default function* rootSaga() {
  yield all([helloSaga(), fetchPosts(), watchIncrementAsync()])
}
