import React from 'react'
import axios from 'axios'
import Vets from './components/Vets/Vets'
import ProfilePage from './components/Vets/Profile'
import BtnGroup from './components/UI/BtnGroup';
import Layout from './components/Layout/Layout';
import Header from './components/UI/Header'
import MatchList from './components/Matches/MatchList'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      vets: [],
      currentVet: {},
      matched: [],
      rejected: [],
      viewProfile: false,
      viewMatches: false,
      error: null
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
        this.setState({
          error: err
        })
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
      this.setState({matched: [...this.state.matched, this.state.currentVet]})
    } else if (action === 'reject') {
      this.setState({rejected: [...this.state.rejected, this.state.currentVet]})
    }
  }

  toggleProfilePage = () => {
    this.setState({
      viewProfile: !this.state.viewProfile
    })
  }

  toggleViewMatches = () => {
    this.setState({
      viewMatches: !this.state.viewMatches
    })
  }

  render () {
    const { 
      currentVet, 
      viewProfile,
      viewMatches,
      matched,
    } = this.state;

    return (
      <Layout>
        <Header toggleViewMatches={this.toggleViewMatches} />
        <div className="content">
          { 
            viewMatches ? 
            <MatchList matched={matched} /> :
            <div className="current-vet">
              <h1>Current Vet</h1>
              <Vets currentVet={currentVet} />
              <BtnGroup swipe={this.swipe} toggleProfilePage={this.toggleProfilePage} />
              {viewProfile && <ProfilePage currentVet={currentVet} />}
            </div>
          }
        </div>
      </Layout>
    )
  }
}

export default App
