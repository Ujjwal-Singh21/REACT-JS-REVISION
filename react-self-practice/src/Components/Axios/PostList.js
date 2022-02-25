import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      Users: [],
      error: ''
    }
  }

  componentDidMount = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.setState({
          Users: response.data,
          error: ''
        })
      })
      .catch((error) => {
        this.setState({
          Users: [],
          error: 'Something Went Wrong'
        })
      })
  }
  render () {
    const { Users, error } = this.state
    return (
      <div>
        <h1 className='primary'> PostList Component </h1>
        {
            Users.length ? Users.map(user => <h3 key={user.id}> {user.name} </h3>) :
            null
        }

        {
            error.length ? <h3 className='error'> {error} </h3> :
            null
        }
      </div>
    )
  }
}

export default PostList
