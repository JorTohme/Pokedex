import { useEffect, useState } from 'react';
import Pokedex from './Components/Pokedex/Pokedex.js';
import './App.css';

function App() {

  const [pokeName, setPokeName] = useState('');
  const [animation, triggerAnimation] = useState('');
  const [loading, setLoading] = useState(false);

  const [pokemonData2, setpkmnData2] = useState(null);
  const [pokemonData, setpokemonData] = useState(null)

  function handleChange(event) {
    setPokeName(event.target.value.toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();

    triggerAnimation("mainScreenAnimation");

    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => response.json())
      .then(json => {
        fetch(json.species.url)
          .then(response => response.json())
          .then(json2 => {
            setpokemonData(json);
            setpkmnData2(json2);
            setLoading(false);
          });
        })
      .catch(err => console.log(err));
  }

  useEffect(() => {

  }, [loading])

  if (pokemonData) {
    return (
      <div className="App">
        <div className='invertedAnimation'>
          <Pokedex pkmnData={pokemonData} pkmnData2={pokemonData2}/>
        </div>
      </div>
    )
  }


  return (
    <div className="App">
      <div className={animation}>
        <header>
          <img src={require("./title.png")} alt="Pokedex" />
        </header>
        <form onSubmit={handleSubmit}>
          <p>Ingresa el nombre del Pokemon</p>
          <input
            onChange={handleChange}
            type="text"
            id="pokemon-name"
            autoComplete="off"
            required />
          <button type="submit" className="pokebutton" >Consultar</button>
        </form>
      </div>
      {
        loading === true &&
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      }
    </div>
  );
}



export default App;