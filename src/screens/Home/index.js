import React from 'react'
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Search from '../../components/Search'

import { getUsersSaga, getPostsSaga } from '../../actions'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  spacing: {
    margin: '25px 0',
  },
})

const Home = ({
  users,
  posts,
  filteredUsers,
  filteringUsers,
  loadingUsers,
  loadingPosts,
  getUsersSaga,
  getPostsSaga,
}) => {
  const classes = useStyles()

  const handleBtnGetUsers = () => {
    getUsersSaga()
  }

  const handleBtnGetPosts = () => {
    getPostsSaga()
  }
  const mapUsers = filteringUsers ? filteredUsers : users

  return (
    <div className={classes.root}>
      <Typography variant='h1'>Redux sagas</Typography>
      <Typography variant='h2'>Users</Typography>
      {users.length > 0 && (
        <div className={classes.spacing}>
          <Search />
        </div>
      )}
      <TableContainer component={Paper} className={classes.spacing}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mapUsers.map(
              ({ id, name, email, phone, username, website }, i) => (
                <TableRow key={i}>
                  <TableCell>{id}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{username}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{phone}</TableCell>
                  <TableCell>{website}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div>{loadingUsers && <CircularProgress />}</div>
      <Button
        className={classes.spacing}
        color='primary'
        variant='contained'
        onClick={handleBtnGetUsers}
      >
        Load Users
      </Button>

      <Typography variant='h2'>Posts</Typography>
      <TableContainer component={Paper} className={classes.spacing}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map(({ id, title, body }, i) => (
              <TableRow key={i}>
                <TableCell>{id}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>{loadingPosts && <CircularProgress />}</div>
      <Button
        className={classes.spacing}
        color='primary'
        variant='contained'
        onClick={handleBtnGetPosts}
      >
        Load posts
      </Button>
    </div>
  )
}

const mapStateToProps = state => ({
  users: state.usersReducer.users,
  posts: state.postsReducer.posts,
  filteredUsers: state.usersReducer.filteredUsers,
  filteringUsers: state.usersReducer.filteringUsers,
  loadingUsers: state.usersReducer.loadingUsers,
  loadingPosts: state.postsReducer.loadingPosts,
})

const mapDispatchToProps = dispatch => ({
  getUsersSaga: () => dispatch(getUsersSaga()),
  getPostsSaga: () => dispatch(getPostsSaga()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
