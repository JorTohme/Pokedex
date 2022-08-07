import './Stats.css';

function Stats({ pkmnData }) {
  return (
    <div className='Stats'>
      <div className='container'>
        <div className='stats-list'>
          {
            pkmnData.stats.map(e => {
              return (
                <p key={e.stat.name}><span className='stat-name'>{e.stat.name}</span><span className='stat-value'>{e.base_stat}</span></p>)
            })
          }
        </div>
        <div className='stats-list-shadow'></div>

        <img src={pkmnData.sprites.front_default} alt='' id='sprite-front' />
        <img src={pkmnData.sprites.back_default} alt='' id='sprite-back' />

        <div className='habilities-container'>
          <span className='habilities-title'>HABILIDADES</span>
          <p>
            {
              pkmnData.abilities.map(ability => {
                return (
                  <> {ability.ability.name.toUpperCase()} <span>{ability.is_hidden ? 'Normal' : 'Oculto'} </span>
                    <br />
                  </>);
              })
            }
          </p>
        </div>
        <div className='habilities-container-shadow'></div>
        <div className='shiny-sprites'>
          <img src={pkmnData.sprites.front_shiny} alt='shiny sprite'></img>
          <img src={pkmnData.sprites.back_shiny} alt='shiny sprite back'></img>
        </div>
      </div>
    </div>
  )
}

export default Stats;