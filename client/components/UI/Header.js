import React from 'react';

const Header = props => {
  return (
    <header>
      <button onClick={props.toggleViewMatches}>View Matches</button>
    </header>
  )
}

export default Header