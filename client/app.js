import React from 'react'
import axios from 'axios'
import Vets from './components/Vets/Vets'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      vets: [],
      currentVet: {}
    }
  }

  componentDidMount () {
    axios
      .get('/api/vets')
      .then(res => {
        this.setState({
          vets: res.data,
          currentVet: res.data[0]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  next = () => {
    // this.setState({
    //   currentVet
    // })
  }

  reject = () => {

  }

  accept = () => {

  }

  render () {
    const { vets, currentVet } = this.state;

    return (
      <div className="rover">
        Rover
        <Vets currentVet={currentVet} />
        <div className="btn-group">
          <button onClick={this.reject}>Reject</button>
          <button onClick={this.accept}>Accept</button>
        </div>
      </div>
    )
  }
}

export default App
