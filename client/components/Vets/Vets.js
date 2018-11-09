import React from "react";
import Vet from './Vet'

class Vets extends React.Component {
  renderVets () {
    return this.props.vets.map(vet => {
      return <Vet key={vet.id} vet={vet} />
    })
  }

  render() {
    return (
      <div>
        { this.renderVets() }
      </div>
    );
  }
}

export default Vets;
