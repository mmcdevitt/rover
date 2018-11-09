import React from "react";

class ProfilePage extends React.Component {
  render() {
    const { currentVet } = this.props;

    return (
      <div className="profile-page">
        <div className="profile-page-heading">
          <h3>Profile page of {currentVet.firstName} {currentVet.lastName}</h3>
        </div>
        <div className="profile-page-description">
          <p>{currentVet.description}</p>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
