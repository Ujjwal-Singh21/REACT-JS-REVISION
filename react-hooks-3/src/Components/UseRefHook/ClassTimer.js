import { Component } from 'react'

export class ClassTimer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      timer: 0
    }
  }

  // if tick method is used in setInterval()
  //-------------------------------------------
  //   tick = () => {
  //     this.setState((prevState) => {
  //       return {
  //         timer: prevState.timer + 1
  //       }
  //     })
  //   }

  componentDidMount () {

    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return {
          timer: prevState.timer + 1
        }
      })
    }, 1000)
  }

  // componentWillUnmount () {
  //   clearInterval(this.interval)
  // }

  render () {
    const { timer } = this.state
    return (
      <div>
        <h2> ClassTimer Value : {timer} </h2>
        <button onClick={() => clearInterval(this.interval)}> Clear  Class Timer </button>
      </div>
    )
  }
}

export default ClassTimer
