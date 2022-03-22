import React, {useEffect, useState} from 'react';
import GalleryTitle from "./GalleryTitle";
import GalleryColumn from "./GalleryColumn";

const YouMightLike = () => {
    const [youMayLikeList, setYouMayLikeList] = useState([])
    const [error, setError] = useState([])

    useEffect(   () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=4&offset=20').then(response => {
            if(response.status === 200)
                return response.json()
        }).then(data => {
                setYouMayLikeList(data.results)
            },
            (err) => {
                setError(err)
            })
    }, [])

    return (<>
        {
            youMayLikeList ?
                <>
                    <GalleryTitle/>
                    <GalleryColumn pokemonList={youMayLikeList}/>
                </> : <p>{error}</p>
        }
        </>
    )
};

export default YouMightLike;