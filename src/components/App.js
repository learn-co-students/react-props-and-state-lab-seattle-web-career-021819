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


  onAdoptPet = petId => {
      debugger
      const pets = this.state.pets.map(p => {
        return p.id === petId ? { ...p, isAdopted: true } : p;
      });
      debugger
      this.setState({ pets:pets });
    };
    // debugger
    // this.setState(prevState => ({
    //   pets:{
    //     ...this.pets,
    //     [prevState.pets[index].isAdopted]: true
    //   }
    // }))
    // debugger

  onChangeType=(type)=>{
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      }
    })
  }

  onFindPetsClick=()=>{
    const currFilter=this.state.filters.type
    if(currFilter==='all'){
      fetch('/api/pets')
      .then(response=>response.json())
      .then(data=>this.setState({pets: data}))
    }else{
      fetch(`/api/pets?type=${currFilter}`)
      .then(response=>response.json())
      .then(data=>this.setState({pets: data}))

    }
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
