import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';


class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      pokemons: [],
    };
  }

  componentDidMount() {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(apiUrl)
      .then(response => response.json())
      .then(pokes => this.setState({ pokemons: pokes.results }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const filteredPokemons = this.state.pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1>PokeFriends</h1>
        <SearchBox searchChange={ this.onSearchChange }/>
        <Scroll>
          <CardList pokemons={filteredPokemons} />
        </Scroll>
      </div>
    );
  }
};

export default App;