import React from 'react'
import Plot from 'react-plotly.js'

class Surfaceplot extends React.Component {

  constructor(props) {
    super(props)
    this.initstate = this.getMesh(100)
    this.state = this.initstate
  }

  getMesh(size) {
    const theta = []
    const r = []
    const { a } = this.props.data

    for(let i=0;i<=size;i++){
      if (theta.length === 0) {
        var _theta = -Math.PI
      }
      theta.push(_theta)
      _theta = _theta + 2*Math.PI / size

    }

    for(let i=0;i<=size;i++){
      if (r.length === 0) {
        var _r = 0
      }
      r.push(_r)
      _r = _r + (a / 10) / size
    }

    const x = []
    const y = []
    const z = []

    r.forEach((j, i) => {
      x.push(Math.round(j*Math.cos(theta[i])*1000000)/1000000)
      y.push(Math.round(j*Math.sin(theta[i])*1000000)/1000000)
    })

    x.forEach((x, i) => {
      z.push()
    })

    var data = {
        x: x,
        y: y, 
        mode: 'markers',
        type: 'scatter'
    }

    return data
        
  }

  componentDidUpdate(nextProps) {
    const { data } = this.props
    if (nextProps.data !== data) {
      this.setState(this.getMesh(100))
    }
  }

  render() {
    // const { R, a } = this.props.data
    return (
    <div id="plot">
      <Plot data={[this.state]} />
    </div>)
  }
}

export default Surfaceplot