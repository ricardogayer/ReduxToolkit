import {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, setPokemons } from './store/slices/pokemon/pokemonSlice';
import { getPokemons } from './store/slices/pokemon/thunks';
import './App.css';

const PokemonApp = () => {

    const [page, setPage] = useState(0);
    const dispatch = useDispatch();
    const { isLoading, pokemons = []} = useSelector((state) => state.pokemon);

    useEffect(() => {
       dispatch(getPokemons(page))
    }, [page])
 
    const handleClick = () => {
        setPage(page + 1);
        dispatch(getPokemons(page))
    }

    const handleClickPrev = () => {
        setPage(page - 1);
        dispatch(getPokemons(page))
    }

    if (isLoading) {
        return <div>Carregando...</div>
    }

  return (
    <>
        <h1> Pokemon App </h1>
        <hr/>
        <ul>
           { pokemons.map( (pokemon) => { return <li key={pokemon.name}> {pokemon.name} </li> } ) }
        </ul>

    <br/>
    <button onClick={handleClickPrev} disabled={isLoading || page === 0}> Prev Page </button>
    <p> {page} </p>
    <button onClick={handleClick} disabled={isLoading}> Next Page </button>
    </>

  )
}

export default PokemonApp