import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

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

  onSearchChange = ({ target }) => {
    this.setState({ searchField: target.value });
  }

  render() {
    const { pokemons, searchField } = this.state;
    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1>PokeFriends</h1>
        <SearchBox searchChange={ this.onSearchChange }/>
        <Scroll>
          <ErrorBoundry>
            <CardList pokemons={filteredPokemons} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
};

export default App;