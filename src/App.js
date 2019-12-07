import React from 'react'
import Clock from './Clock'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      running: false,
      time: 124
    }
  }

  render() {
    return <Clock />
  }
}

export default App