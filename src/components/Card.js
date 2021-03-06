import React from 'react';

const Card = ({ id, name }) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='pokemons' src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` } />
      <div>
        <h2>
          {name}
        </h2>
      </div>
    </div>
  );
};

export default Card;