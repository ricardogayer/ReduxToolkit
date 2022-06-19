import { setPokemons, startLoadingPokemons, endLoadingPokemons } from "./pokemonSlice";
import { pokemonApi } from "../../../api/pokemonApi";
import { useQuery } from 'react-query';
import { request } from './axios-utils';
import { useDispatch } from "react-redux";

 export const getPokemons = ( page = 0 ) => {

    return async ( dispatch, getState ) => {

        dispatch( startLoadingPokemons() );

        // const resp =  await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`);
        // const data =  await resp.json();

        // const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=10`);
        const { data } = await pokemonApi.get(`/pokemon?offset=${ page * 10 }&limit=10`);

        dispatch( setPokemons({ pokemons: data.results, isLoading: false , page: page }) );


        // dispatch( endLoadingPokemons() );

    }

 }

export const fetchPokemons = ( page ) => {
    return request({url: `/pokemon?offset=${page * 10}&limit=10`});
};

export const useGetPokemons = ( page ) => {
    return useQuery(['pokemons',page], () =>  fetchPokemons(page));
}