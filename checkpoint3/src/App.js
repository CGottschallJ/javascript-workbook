import React, { Component } from 'react';
import './App.css';
import DisplayCard from './DisplayCard';
import StatCard from './StatCard';

// create a place for users to search YouTube tabletop videos
// cater videos to only display ones specific to table top gaming
// allow users to store videos in a saved list


class App extends Component {
  state = {
    pokemon: '',
    pokemonData: null
  };

  getThePokemonData(paramString) {
    return fetch(`http://pokeapi.co/api/v2/pokemon/${paramString}`)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          return this.setState({pokemonData: responseJson})
        })
        .catch((error) => {
          console.error(error);
        });
      }

  handleSubmit(event) {
    event.preventDefault();
    let pokemonName = `${this.state.pokemon}`;
    console.log('in handleSubmit', pokemonName);
    this.getThePokemonData(pokemonName);
  }

  reset() {
    this.setState({pokemon: '', pokemonData: ''})
  }

  renderPokemon() {
    if(this.state.pokemonData) {
      console.log('in render pokemon ', this.state.pokemonData);
      return <DisplayCard name={this.state.pokemonData['name']} id={this.state.pokemonData['id']} sprites={this.state.pokemonData.sprites} />
    }
    return null;
  }

  renderStats() {
     if(this.state.pokemonData) {
      let abilities = (this.state.pokemonData['abilities']);
      console.log('in renderStats ', abilities)
      return abilities.map((obj, index) =>
        // console.log('obj', obj)
        // console.log(obj.ability.name);
        //let abilityName = obj.ability.name;
        // console.log(abilityName);
       <StatCard abilities= {obj.ability.name} key={index} />
      )
      console.log('map reached');
      //return <StatCard abilities={this.state.pokemonData['abilities'][0]['ability']['name']} />
    }
    //return null;
  }


  render() {
    return (
      <div className="App">
      <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Pokemon Name"
            value={this.state.pokemon}
            onChange={(e) => this.setState({pokemon: e.target.value}) } />
          <br/>
          <input type="submit"/>
          <button type='button' onClick={(e) => this.reset()}>
            Reset
          </button>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className='pokemonDisplay'>
            {this.renderPokemon()}
          </div>
          <div className='statDisplay'>
            <h1>Information</h1>
            <h2>Abilities</h2>
            {this.renderStats()}
          </div>
      </form>
      </div>
    );
  }
}

export default App;
