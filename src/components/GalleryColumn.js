import React from 'react';
import GalleryRow from "./GalleryRow";
import '../styles/GalleryColumn.css'

const GalleryColumn = ({pokemonList, loadMorePokemon}) => {
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
            {
                getGalleryRow()
            }{
                rowElements.length > 0 &&
            <button
                onClick={loadMorePokemon}
                style={{marginBottom:'1rem', marginTop:'0.5rem'}}>
                Load More
            </button>
            }
        </div>
    );
};

export default GalleryColumn;