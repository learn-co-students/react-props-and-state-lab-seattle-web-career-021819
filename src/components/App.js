import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

///matches filtered value and sets state
  onChangeType = (filteredValue) =>{
    this.setState({
      filters: {...this.state.filters,
      type: filteredValue}
    },()=>{console.log(this.state.filters.type)})
  }

  changePetState = (data) =>{
    this.setState({
      pets: [...data]
    })
  }

////configure api call based on pets
  findPetsClick = () =>{
    let type = this.state.filters.type
    if (type ==='all'){
      fetch('/api/pets')
      .then(resp=>resp.json())

      .then(data=>{
        this.setState({
          pets: [...data]
        })})
    } else {
      fetch(`/api/pets?type=${type}`)
      .then(resp=>resp.json())
      .then(data=>{
        this.setState({
          pets: [...data]
        })})
    }
    console.log(this.state.pets);
  }


//post change to adopt pet
  adoptPet =(petId) =>{
    const pets = this.state.pets.map(p => {
       return p.id === petId ? { ...p, isAdopted: true } : p;
     });
     this.setState({ pets });
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.findPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
