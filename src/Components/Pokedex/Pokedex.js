import './Pokedex.css';
import Introduction from '../Introduction/Introduction';
import Stats from '../Stats/Stats';
import hinge from './hinge.svg'
function Pokedex({ pkmnData, pkmnData2}) {
  function reloadPage() {
    window.location.reload();
  }

  return (
    <div className='Pokedex'>
      <button id='reload' onClick={reloadPage}>{'<'}</button>
      <Introduction pkmnData={pkmnData} pkmnData2={pkmnData2}/>
      <div className='hinges-container'>
        <img src={hinge} className='hinges' alt=''/>
        <img src={hinge} className='hinges' alt=''/>
      </div>
      <Stats pkmnData={pkmnData}/>
    </div>
  )
}
export default Pokedex;