import React from 'react';
import axios from 'axios'

export default class MatchList extends React.Component {
  setAppointment (matchId) {
    axios
      .post('/api/appointments', {
        userId: 1,
        matchId
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  renderMatches () {
    const { matched } = this.props;

    if (matched.length === 0) {
      return <div>You have no matches</div>
    } else {
      return matched.map(match => {
        return (
          <div key={match.id}>
            {match.firstName} {match.lastName} <button onClick={() => this.setAppointment(match.id)}>Set Appointment</button>
          </div>
        )
      })
    }
  }

  render () {
    return (
      <div className="matches">
        <h1>Match List</h1>
        {
          this.renderMatches()
        }
      </div>
    )
  }
}