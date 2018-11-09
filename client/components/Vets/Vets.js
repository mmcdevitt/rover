import React from "react";
import Vet from './Vet'

class Vets extends React.Component {
  renderVet () {
    const { currentVet } = this.props;

    return <Vet vet={currentVet} />
  }

  render() {
    return (
      <div>
        { this.renderVet() }
      </div>
    );
  }
}

export default Vets;
