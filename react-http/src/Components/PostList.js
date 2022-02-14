import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
  constructor () {
    super()
    this.state = {
      posts: [],
      errorMsg: ''
    }
  }

  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
          console.log(response);
          this.setState(
              {
                  posts: response.data
              }
          )
      })
      .catch((error) => {
          console.log(error);
          this.setState({
              errorMsg: 'error in retrieving data'
          })
      })
      } 
  
  render () {
    const { posts, errorMsg } = this.state

    return (    
      <div>
        <h1> PostList Component </h1>
        {
            posts.length ? 
            posts.map((post) => <h2 key = {post.id}> Title: {post.title} </h2>) :
            null
        }
        {
            errorMsg.length ? 
            <h1> {errorMsg} </h1> : null
        }
      </div>
    )
  }
}

export default PostList
