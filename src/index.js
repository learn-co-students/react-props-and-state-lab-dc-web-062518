import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './fetch-setup';

ReactDOM.render(<App />, document.getElementById('root'));

let fetchFinder = {
  'all': `/api/pets`,
  'cat': `/api/pets?type=cat`,
  'dog': `/api/pets?type=dog`,
  'micropig': `/api/pets?type=micropig`
}

let onFindPetsClick = (query) => {
    fetch(fetchFinder[query])
      .then(r=> r.json())
        .then(json =>
          console.log(json)
          // this.setState({
          //   pets: json
          // })
        )}
