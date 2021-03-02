import logo from './logo.svg';
import './App.css';
import playerData from './data/data.json';
import Player from './components/Player';
import { useState} from 'react';
import Cart from './components/Cart';

function App() {

  const [player,setPlayer] = useState([])
  const [cart, setCart] = useState([])

const handlePlayer = (players) => {
// console.log("Addeded");
console.log(players);
  const newCart =[...cart,players];
  // console.log(cart);
  setCart(newCart);
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
          image={player.image} 
          name ={player.name} 
          salary ={player.salary} 
          email ={player.email}>
          
          </Player>)
        }
      </div>
     <div className="selected-container">
     <Cart addedPlayer ={cart.length} ></Cart>
    
     </div>
      </div>
      
    </div>
  );
}

export default App;
