import React, {Component} from 'react';
import DetailView from './DetailView';
import PokeList from './PokeList';
import Pokemon from '../Pokemon';
import './styles/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      pokemon: {}
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => response.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        
        this.setState({pokemon});

      }).catch(err => console.log(err))
  }

  render() {
    return(
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick.bind(this)} />
        <DetailView pokemon={this.state.pokemon} />
      </div>
    )
  }
}

export default App;