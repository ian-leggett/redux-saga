import React from 'react'
import { connect } from 'react-redux'
import { Input } from '@material-ui/core';

import { filterUsers, filteringUsers } from '../actions'

const Search = ({ loadingUsers, filterUsers, filteringUsers, dispatch }) => {
  const handleChange = e => {
    filteringUsers(() => dispatch({ type: 'FILTERING_USERS' }))
    filterUsers(e.target.value)
  }
  return (
    <div style={{ flex: 'none' }}>
      {!loadingUsers ? (
        <Input focus placeholder='Search...' onChange={handleChange} />
      ) : null}
    </div>
  )
}

const mapStateToProps = state => ({
  loadingUsers: state.usersReducer.loadingUsers,
})

export default connect(mapStateToProps, { filterUsers, filteringUsers })(Search)
