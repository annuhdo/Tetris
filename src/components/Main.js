import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {O, I, Z, T, L} from './Tetromino'
import ShapeView from './ShapeView'
import Grid from './Grid'


class Main extends Component {
  constructor() {
    super()

    this.state = {
      intervalId: null,
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    this.stopTick()
  }

  startTick = () => {
    let row = 1
    let intervalId = setInterval(() => {
      return this.props.append('tomato', row++, 10), 1000
    })
    this.setState({
      intervalId
    })
  }

  stopTick = () => {
    clearInterval(this.state.intervalId)
  }

  render() {
    return (
      <Grid rows={20} cols={10} />
    )
  }

  // render() {
  //   let data = this.props.shapes
  //   return (
  //     <div>
  //       <button onClick={this.startTick}>Start</button>
  //       <button onClick={this.stopTick}>Stop</button>
  //       {data.map((tetromino, i) => <ShapeView key={i} shape={tetromino} />)}
  //     </div>
  //   )
  // }
}

export default Main
