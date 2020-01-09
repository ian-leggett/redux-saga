/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  fetchPosts,
  onIncrementAsync,
}) => {
  const { counter, posts } = value
  const postsListMarkup = posts
    ? posts.map(post => <div key={post.id}>{post.title}</div>)
    : null
  return (
    <div>
      <button onClick={onIncrementAsync}>Increment after 1 second</button>{' '}
      <button onClick={onIncrement}>Increment</button>{' '}
      <button onClick={onDecrement}>Decrement</button>{' '}
      <button onClick={fetchPosts}>Get post data</button>
      <hr />
      <div>Clicked: {counter} times</div>
      <hr />
      {postsListMarkup}
    </div>
  )
}

Counter.propTypes = {
  value: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export default Counter
