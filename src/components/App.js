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

  onChangeType = ev => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: ev.target.value
      }
    })
  }

  onFindPetsClick = ev => {
    let url;
    if (this.state.filters.type === 'all') {
      url = '/api/pets';
    } else if (this.state.filters.type === 'cat') {
      url = '/api/pets?type=cat';
    } else if (this.state.filters.type === 'dog') {
      url = '/api/pets?type=dog';
    } else if (this.state.filters.type === 'micropig') {
      url = '/api/pets?type=micropig';
    }
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
  }

  // This callback prop gets called with the pet's id when the user clicks the adopt pet button — not when they click the disabled button!
  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets });
  };


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
