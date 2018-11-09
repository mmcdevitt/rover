import React from "react";
// import { Column, Nested } from "../Grid";
// import Restaurant from './Restaurant';

// import './restaurant.css';

class Vet extends React.Component {
  render() {
    const { vet } = this.props;
    
    return (
      <div>
        { vet.firstName } { vet.lastName }
        <div>
          <img src={vet.imageUrl} height="250" />
        </div>
      </div>
    );
  }
}

export default Vet;
