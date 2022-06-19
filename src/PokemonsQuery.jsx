import React, { useState } from 'react';
import { useGetPokemons, fetchPokemons } from './store/slices/pokemon/thunks';
import { useQuery } from 'react-query';

const PokemonsQuery = () => {


 

  const [page, setPage] = useState(0);

  const executa = () => {
    console.log("first success");
}


  const nextPage = () => {
    setPage(page + 1);
  } 

  const prevPage = () => {
    setPage(page - 1);
  } 

  const { data, isLoading } = useGetPokemons(page,{
    onSuccess: executa,
  });  

  const { data: pokemons } = useQuery(['getPokemons',page], () => fetchPokemons(page));

  console.log('pokemons', pokemons);

    if (isLoading) {
        return <h4> Loading... </h4>
    }


  return (

    <div>
        <h1> Pokemons Query - Page {page} </h1>

        <ul>
           { data?.data.results.map((i) => <li key={i.name}> {i.name} </li>)}
        </ul>
        <hr/>

       <button onClick={prevPage} disabled={ page == 0 ? true : false }> Prev </button>
       <button onClick={nextPage}> Next </button>

        <hr/>

        <ol>
            { pokemons?.data.results.map( (pokemon) => <li key={pokemon.name }> { pokemon.name} </li> ) }
        </ol>

    </div>

  )
}

export default PokemonsQuery