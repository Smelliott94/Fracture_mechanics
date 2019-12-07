import React from 'react'
import Form from './Form'
import SurfacePlot from './SurfacePlot'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      R: 0.03 / 2,
      a: 0.03 / 2,
      sigma_yield: 350,
      sigma_o: 100, // MPa (Remote Stress)
      sigma_1: 0,
      sigma_2: 0,
      sigma_3: 0, //Initially 0 for plane stress
      E: 72400, // MPa (Young's Modulus)
      nu: 0.3, // Poisson's Ratio
      //Stress field Contour xyz
      X: 0,
      Y: 0,
      Z: 0,
    }
  }

  submitFormData = (e, childstate) => {
    // Update the app state with the new values from the form
    console.log(childstate)
    this.setState(childstate)
  }

  render() {
    return (
      <div>
        <Form submitFormData={ this.submitFormData } />
        <SurfacePlot data={ this.state } />
      </div>
    )
  }
}

export default App