import React from "react";
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faPlus } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    // console.log(props);
    const {name,salary,email,image} =props;
  return (
    <div className='player-card'>
     <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2>Name:{name}</h2>
        <h3>Salary : {salary}</h3>
        <h4>Email : {email}</h4>
        <button onClick={()=>props.handlePlayer(props.player)} className='button'><FontAwesomeIcon icon={faPlus} style={{marginRight:'10px'}}/>Select</button>
      </div>
     
    </div>
  );
};

export default Player;
