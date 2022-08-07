import './Introduction.css';
import { useState } from 'react';
function Introduction({ pkmnData, pkmnData2 }) {

  const [entryNumber, setEntryNumber] = useState(0);

  let pokedexEntries = [];
  pkmnData2.flavor_text_entries.forEach(entry => {
    if (entry.language.name === "es") {
      pokedexEntries.push(entry.flavor_text)
    }
  })

  const TYPECOLORS = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    fairy: '#F9ACF2',
    dark: '#2A1A1F',
  };

  function next() {
    if (entryNumber !== (pokedexEntries.length - 1)) setEntryNumber(entryNumber + 1);
  }

  function previous() {
    if (entryNumber !== 0) setEntryNumber(entryNumber - 1)
  }

  const pokeType = pkmnData.types[0].type.name;

  let backgroundStyle = {
    background: `${TYPECOLORS[pokeType]}`,
  }

  if (pkmnData.types[1]) {
    backgroundStyle = {
      background: `radial-gradient(${TYPECOLORS[pkmnData.types[0].type.name]} 33%, ${TYPECOLORS[pkmnData.types[1].type.name]} 33%)`,
      backgroundSize: "11px 11px",
    }
  }


  return (
    <div className='Introduction'>
      <div className='details-top'>
        <div className='circle'></div>
        <div className='circle'></div>
      </div>
      <div className='super-container'>
        <div className='container'>
          <div className='pokemon-info'>
            <div className='NAME'> {pkmnData.name.toUpperCase()} </div>
          </div>
          <div className='data-container'>
            <div className='img-container'>
              <img src={pkmnData.sprites.other["official-artwork"].front_default} alt="official artwork" id="pokeIMG" style={backgroundStyle} />
              <div className='circle'></div>
            </div>
            <div className='types-container'>

              #{pkmnData.id}
              <div className='TYPES'>
                {<img src={require(`./Types/${pkmnData.types[0].type.name}.png`)} alt={pkmnData.types[0].type.name} />}
                {
                  pkmnData.types[1] &&
                  <img src={require(`./Types/${pkmnData.types[1].type.name}.png`)} alt={pkmnData.types[1].type.name} />
                }
              </div>
            </div>
          </div>
          <div className='DESCRIPTION'>
            {pokedexEntries[entryNumber]}
          </div>
          <div className='screen-buttons'><button onClick={previous}>{'<'}</button><button onClick={next}>{'>'}</button></div>
        </div>
      </div>
    </div>
  )
}

export default Introduction;