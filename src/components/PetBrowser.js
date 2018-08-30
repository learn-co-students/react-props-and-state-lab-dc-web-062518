import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      {this.props.pets.map(newPet =>{
        return  <Pet key={this.props.id} pet={newPet} onAdoptPet={this.props.onAdoptPet} />
      })}
    </div>

  }
}

export default PetBrowser
