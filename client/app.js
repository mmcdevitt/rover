import React from 'react'
import axios from 'axios'
import Vets from './components/Vets/Vets'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      vets: []
    }
  }

  componentDidMount () {
    axios
      .get('/api/vets')
      .then(res => {
        this.setState({
          vets: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    const { vets } = this.state;

    console.log(this.state)
    return (
      <div className="rover">
        Rover
        <Vets vets={vets} />
      </div>
    )
  }
}

export default App
