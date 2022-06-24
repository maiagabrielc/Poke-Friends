import React from 'react';
import Card from './Card';

const CardList = ({ pokemons }) => {
  return (
    <>
      {
        pokemons.map((pokemon, i) => {
          const pid = pokemon.url.split('/')[6];
          return (
            <Card
              key={i}
              id={pid}
              name={pokemon.name}
            />
          );
        })
      }
    </>
  );
};

export default CardList;