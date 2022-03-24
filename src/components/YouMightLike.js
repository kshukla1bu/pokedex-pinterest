import React, {useEffect, useState} from 'react';
import GalleryTitle from "./GalleryTitle";
import GalleryColumn from "./GalleryColumn";
import {randomIntFromInterval} from "../utils/Utilities";

const YouMightLike = ({ likedList, setLikedList, setModalOpen, setShowPokemon }) => {
    const [youMayLikeList, setYouMayLikeList] = useState([])
    const [error, setError] = useState([])

    useEffect(   () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=18&offset='+randomIntFromInterval()).then(response => {
            if(response.status === 200)
                return response.json()
        }).then(data => {
                setYouMayLikeList(data.results)
            },
            (err) => {
                setError(err)
            })
    }, [])

    const loadMorePokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=18&offset='+randomIntFromInterval()).then(response => {
            if(response.status === 200)
                return response.json()
        }).then(data => {
                setYouMayLikeList(youMayLikeList => [...youMayLikeList, ...data.results])
            },
            (err) => {
                setError(err)
            })
    }

    return (<>
        {
            youMayLikeList ?
                <>
                    <GalleryTitle/>
                    <GalleryColumn
                        likedList={likedList}
                        setModalOpen={setModalOpen}
                        setLikedList={setLikedList}
                        pokemonList={youMayLikeList}
                        setShowPokemon={setShowPokemon}
                        loadMorePokemon={loadMorePokemon}
                        setYouMayLikeList={setYouMayLikeList}
                    />
                </> : <p>{error}</p>
        }
        </>
    )
};

export default YouMightLike;