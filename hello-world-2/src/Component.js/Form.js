// creating a form to practice controlled component

import React, { Component } from 'react'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      comments: '',
      topic: ''
    }
  }

  handleUserNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value
    })
  }

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value
    })
  }

  handleSubmitButton = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
  }

  render () {

    //   by destructuring the state properties here
    //   In value property, we can write this.state.username as username
    //   similarly this.state.comments as simply comments

    const { username, comments, topic } = this.state

    return (
      <form onSubmit = {this.handleSubmitButton} >

        <div>
          <label> Username </label>
          <input
            type='text'
            //value={this.state.username}
            value={username}
            onChange = {this.handleUserNameChange}
          ></input>
        </div>

        <div>
          <label> Comments </label>
          <textarea
            value={comments}
            onChange = {this.handleCommentsChange}
          ></textarea>
        </div>

        <div>
          <label> Topic </label>
          <select value={topic} onChange = {this.handleTopicChange}>

            <option>---Select a Topic---</option>
            <option value='react'> React </option>
            <option value='angular'> Angular </option>
            <option value='vue'> Vue </option>
            <option value='javaScript'> JavaScript </option>

          </select>
        </div>

        <button type='submit'> Submit </button>

      </form>
    )
  }
}

export default Form
