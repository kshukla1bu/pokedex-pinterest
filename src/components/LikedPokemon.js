import React from 'react';
import GalleryTitle from "./GalleryTitle";
import GalleryColumn from "./GalleryColumn";

const LikedPokemon = ({ likedList, setLikedList, setShowPokemon, setModalOpen }) => {

    return (
        <>
            <GalleryTitle isLikedList/>
            <GalleryColumn
                likedList={likedList}
                pokemonList={likedList}
                setModalOpen={setModalOpen}
                setLikedList={setLikedList}
                setShowPokemon={setShowPokemon}
            />
        </>
    );
};

export default LikedPokemon;