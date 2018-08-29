import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

let fetchFinder = {
  'all': '/api/pets',
  'cat': '/api/pets?type=cat',
  'dog': '/api/pets?type=dog',
  'micropig': '/api/pets?type=micropig'
}

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

  onFindPetsClick = () => {
    fetch(fetchFinder[this.state.filters.type])
      .then(r => r.json())
      .then(json =>
        this.setState({pets: json}))
  }

  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e.currentTarget.value
      }
    })
  }
  onAdoptPet = (id) => {
    let newPets = this.state.pets.map( pet => {
      if (pet.id === id) {
        pet.isAdopted = !pet.isAdopted
        return pet
      } else {
        return pet
      }
    })
    this.setState({pets: newPets})
    // let pet = this.props.pets.find(pet => { return pet.id === id})
  }

Collapse 

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
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
