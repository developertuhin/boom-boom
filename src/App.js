import logo from './logo.svg';
import './App.css';
import playerData from './data/data.json';
import Player from './components/Player';
import { useState} from 'react';
import Cart from './components/Cart';

function App() {
// UseState declaration--
  const [player,setPlayer] = useState([])
  const [cart, setCart] = useState([])

// Button Handler--
const handlePlayer = (players) => {
  const newCart =[...cart,players];
  setCart(newCart);
  console.log(players);

}
  return (
    <div className="App" >
      <h2>Total Player:{playerData.length}</h2>
      
    <div style={{display: 'flex'}}>
      <div className="player-container">
      {
          playerData.map((player) => 
          <Player

          handlePlayer={handlePlayer}
          player={player}>
         
          
          </Player>)
        }
      </div>
     <div className="selected-container">
     <Cart cart={cart} ></Cart>
    
     </div>
      </div>
      
    </div>
  );
}

export default App;
