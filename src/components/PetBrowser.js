import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return <div className="ui cards">
      {this.props.pets.map((currPet, idx) => {
        return <Pet pet={currPet} key={idx} onAdoptPet={this.props.onAdoptPet} isAdopted={currPet.isAdopted} />
      })}
    </div>
  }
}

export default PetBrowser
