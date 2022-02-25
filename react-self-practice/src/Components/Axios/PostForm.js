import axios from 'axios'
import React, { Component } from 'react'

class Postform extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userId: '',
      title: '',
      body: ''
    }
  }

  handleFieldChange = (e) => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label> User ID : </label>
            <input
              type='text'
              name='userId'
              value={this.state.userId}
              onChange={this.handleFieldChange}
            />
          </div>

          <div>
            <label> Title : </label>
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleFieldChange}
            />
          </div>

          <div>
            <label> Body : </label>
            <input
              type='text'
              name='body'
              value={this.state.body}
              onChange={this.handleFieldChange}
            />
          </div>

          <button type='submit'> Submit </button>
        </form>
      </div>
    )
  }
}

export default Postform
