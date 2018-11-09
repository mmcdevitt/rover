import React from 'react'

const BtnGroup = props => {
  return (
    <div className="btn-group">
      <button onClick={() => props.swipe('reject')}>Reject</button>
      <button onClick={() => props.swipe('accept')}>Accept</button>
      <button onClick={props.toggleProfilePage}>Profile</button>
    </div>
  )
}

export default BtnGroup;