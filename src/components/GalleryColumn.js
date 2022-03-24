import React from 'react';
import GalleryRow from "./GalleryRow";
import '../styles/GalleryColumn.css'

const GalleryColumn = ({
                           likedList,
                           pokemonList,
                           setLikedList,
                           setModalOpen,
                           setShowPokemon,
                           loadMorePokemon,
                           setYouMayLikeList
}) => {
    let rowElements = []
    const getGalleryRow = () => {
        if(loadMorePokemon) {
            for (let i = 0; i < pokemonList.length; i += 3) {
                const chunkArray = pokemonList.slice(i, i + 3)
                rowElements.push(
                    <GalleryRow
                        key={i}
                        setShowPokemon={setShowPokemon}
                        setModalOpen={setModalOpen}
                        likedList={likedList}
                        rowArray={chunkArray}
                        setLikedList={setLikedList}
                        pokemonList={pokemonList}
                        setYouMayLikeList={setYouMayLikeList}
                    />
                )
            }
        } else {
            for (let i = 0; i < pokemonList.length; i += 3) {
                const chunkArray = pokemonList.slice(i, i + 3)
                rowElements.push(
                    <GalleryRow
                        key={i}
                        setModalOpen={setModalOpen}
                        setShowPokemon={setShowPokemon}
                        rowArray={chunkArray}
                        likedList={likedList}
                        setLikedList={setLikedList}
                    />
                )
            }
        }
        return rowElements
    }

    return (
        <div className={'gColumn'}>
            {
                getGalleryRow()
            }{
                rowElements.length > 0 && setYouMayLikeList &&
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