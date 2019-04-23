import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props){
    super(props)
  }


  render() {
    const allPetCards = this.props.pets.map((pet)=>{
      return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    })

    return <div className="ui cards">{allPetCards}</div>
  }
}

export default PetBrowser;
