import React from 'react';
import PokemonCard from "./PokemonCard";
import '../styles/GalleryRow.css'

const GalleryRow = ({rowArray}) => {
    return (
        <div className={'gRow'}>
            <div className={'gRowChild'}>
            {
                rowArray && rowArray.map(x => <PokemonCard key={x.name} pokemonObj={x} />)
            }
            </div>
        </div>
    );
};

export default GalleryRow;