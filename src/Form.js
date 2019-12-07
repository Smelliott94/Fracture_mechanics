import React from 'react'
import Button from '@material-ui/core/Button';

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.initialState = {
      R: 0.03 / 2,
      a: 0.03 / 2,
      sigma_yield: 350, // MPa (Yield Stress)
    }

    this.state = this.initialState
  }

  handleChange = event => {
    let { name, value } = event.target
    value = parseFloat(value)
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { R, a, sigma_yield } = this.state

    return (
    <form>
      <table>
        <thead>
          <tr>
            <th>R</th>
            <th>a</th>
            <th>&sigma;<sub>yield</sub></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
              type="number"
              name="R"
              value={R}
              onChange={this.handleChange} />
            </td>
            <td>
              <input
              type="number"
              name="a"
              value={a}
              onChange={this.handleChange} />
            </td>
            <td>
              <input
              type="number"
              name="sigma_yield"
              value={sigma_yield}
              onChange={this.handleChange} />
            
            </td>
          </tr>
        </tbody>
      </table>
      <Button variant="contained" color="primary" onClick={(e) => this.props.submitFormData(e, this.state)}>
        SUBMIT
      </Button>
    </form>
    )
  }
}

export default Form