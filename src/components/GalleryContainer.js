import React, {useEffect, useState} from 'react';
import YouMightLike from "./YouMightLike";
import LikedPokemon from "./LikedPokemon";

const GalleryContainer = () => {
    const [youMayLikeList, setYouMayLikeList] = useState(null)
    const [error, setError] = useState([])

    useEffect(   () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=18&offset=20').then(response => {
            if(response.status === 200)
                return response.json()
        }).then(data => {
            setYouMayLikeList(data.results)
        },
            (err) => {
                setError(err)
            })
    }, [])

    return (
        <>
            {youMayLikeList ?
            <YouMightLike pokemonList={youMayLikeList}/> : <p>{error}</p>}
            <LikedPokemon/>
        </>
    );
};

export default GalleryContainer;