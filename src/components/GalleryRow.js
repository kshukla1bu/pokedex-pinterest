import React from 'react';
import PokemonCard from "./PokemonCard";
import '../styles/GalleryRow.css'

const GalleryRow = ({
                        rowArray,
                        setModalOpen,
                        likedList,
                        setShowPokemon,
                        setLikedList,
                        pokemonList,
                        setYouMayLikeList
}) => {
    return (
        <div className={'gRow'}>
            <div className={'gRowChild'}>
            {
                rowArray && rowArray.map(x =>
                    <PokemonCard
                        key={x.name}
                        pokemonObj={x}
                        likedList={likedList}
                        pokemonList={pokemonList}
                        setShowPokemon={setShowPokemon}
                        setLikedList={setLikedList}
                        setModalOpen={setModalOpen}
                        setYouMayLikeList={setYouMayLikeList}
                    />
                )
            }
            </div>
        </div>
    );
};

export default GalleryRow;