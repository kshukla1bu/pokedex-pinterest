import React from 'react';
import GalleryRow from "./GalleryRow";
import '../styles/GalleryColumn.css'

const GalleryColumn = ({pokemonList}) => {
    let rowElements = []
    const getGalleryRow = () => {
        for(let i = 0; i < pokemonList.length; i+=3){
            const chunkArray = pokemonList.slice(i, i+3)
            rowElements.push(<GalleryRow key={i} rowArray={chunkArray}/>)
        }
        return rowElements
    }

    return (
        <div className={'gColumn'}>
            {getGalleryRow()}
        </div>
    );
};

export default GalleryColumn;