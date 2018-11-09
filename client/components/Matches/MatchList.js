import React from 'react';

export default class MatchList extends React.Component {
  renderMatches () {
    return this.props.matched.map(match => {
      return (
        <div key={match.id}>
          {match.firstName}
        </div>
      )
    })
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