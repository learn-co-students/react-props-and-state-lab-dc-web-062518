import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

let fetchFinder = {
'all': '/api/pets',
'cat': '/api/pets?type=cat',
'dog': '/api/pets?type=dog',
'micropig': '/api/pets?type=micropig'
}

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = newType => {
    this.setState({filters: {type: newType}})
  }

  onFindPetsClick = () =>{
    fetch(fetchFinder[this.state.filters.type])
    .then(r=> r.json())
    .then(json=> this.setState({pets: json}))
  }

  onAdoptPet = id => {
    let petsArray = this.state.pets.map(pet=>{
      if(pet.id === id){
        return {...pet, isAdopted: true }

      }else {
        return pet
      }
    })
    this.setState({pets: petsArray})
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets= {this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
