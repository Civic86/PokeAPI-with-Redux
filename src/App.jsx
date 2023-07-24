import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setPokemonData } from './store/pokemonSlice';

const App = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [isLoading, setIsLoading] = useState(false); // define loading and loaded
  const pokemonData = useSelector((state) => state.pokemon.pokemonData);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };

  const fetchPokemonData = async () => {
    setIsLoading(true); // set loading

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      dispatch(setPokemonData(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
      dispatch(setPokemonData(null));
    }

    setIsLoading(false); // set loaded
  };

  return (
    <div>
      <h1>Pokemon Image Fetcher</h1>
      <div>
        <input type="text" value={pokemonName} onChange={handleInputChange} />
        <button onClick={fetchPokemonData}>Fetch Pokemon</button>
      </div>
      {isLoading ? (
        <div>Loading...</div> // show up loading status
      ) : (
        pokemonData && (
          <div>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          </div>
        )
      )}
    </div>
  );
};

export default App;
