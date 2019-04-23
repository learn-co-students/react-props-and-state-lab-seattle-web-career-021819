import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((pet, idx) => {
          return <Pet pet={pet} key={idx} onAdoptPet={this.props.onAdoptPet} isAdopted={pet.isAdopted} />
        })}
      </div>
    )
  }
}

export default PetBrowser
