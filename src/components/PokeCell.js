import React from 'react';
import sprites from '../assets/sprites.png';
import './styles/PokeCell.css';

const PokeCell = ({ pokeClass, handleOnClick }) => {

  const { id, backgroundPosition } = pokeClass;

  const styles = { backgroundImage: `url(${sprites})`, backgroundPosition};

  return <button onClick={() => handleOnClick(id)} type="button" className="poke-cell" style={styles}></button>
}

export default PokeCell;