import React from "react";

class ProfilePage extends React.Component {
  render() {
    const { currentVet } = this.props;

    return (
      <div>
        Profile page of {currentVet.firstName} {currentVet.lastName}
      </div>
    );
  }
}

export default ProfilePage;
