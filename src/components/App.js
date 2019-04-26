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
    // this.handleChangeType = this.handleChangeType.bind(this)
    // this.handleFindPetsClick = this.handleFindPetsClick.bind(this)
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleChangeType = (value) => {
    this.setState({filters: {type: value}})
    // console.log("this.state.filters.type: ", this.state.filters.type)
  }

  handleFindPetsClick = (string) => {
    let api_url = "/api/pets"
    if (this.state.filters.type !== "all") {
      api_url = api_url + `?type=${this.state.filters.type}`
    }

    // console.log("api_url: ", api_url)
    fetch(api_url)
    .then(res => res.json())
    .then(data => this.setState({pets: data}))
  }


}


export default App
