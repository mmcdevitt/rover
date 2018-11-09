import React from 'react'
import axios from 'axios'
import Vets from './components/Vets/Vets'
import ProfilePage from './components/Vets/Profile'
import BtnGroup from './components/UI/BtnGroup';
import Layout from './components/Layout/Layout';

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      vets: [],
      currentVet: {},
      accepted: [],
      rejected: [],
      viewProfile: false
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

  swipe = (action) => {
    const vets = [...this.state.vets];
    vets.shift();

    this.setState({
      vets: this.state.vets.filter(vet => {
        return vet.id !== this.state.currentVet.id
      }),
      currentVet: vets[0],
    })

    if (action === 'accept') {
      this.setState({accepted: [...this.state.accepted, this.state.currentVet]})
    } else if (action === 'reject') {
      this.setState({rejected: [...this.state.rejected, this.state.currentVet]})
    }
  }

  toggleProfilePage = () => {
    this.setState({
      viewProfile: !this.state.viewProfile
    })
  }

  render () {
    const { 
      vets, 
      currentVet, 
      viewProfile 
    } = this.state;

    return (
      <Layout>
        <Vets currentVet={currentVet} />
        <BtnGroup swipe={this.swipe} toggleProfilePage={this.toggleProfilePage} />
        {viewProfile && <ProfilePage currentVet={currentVet} />}
      </Layout>
    )
  }
}

export default App
