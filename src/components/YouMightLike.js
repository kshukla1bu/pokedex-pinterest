import React from 'react';
import GalleryTitle from "./GalleryTitle";
import GalleryRow from "./GalleryRow";

const YouMightLike = ({pokemonList}) => {
    return <>
        <GalleryTitle />
        {
            pokemonList.map(x => <p key={x.name}>{x.name}</p>)
        }
        <GalleryRow />
        </>
}

export default YouMightLike;