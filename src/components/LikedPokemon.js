import React from 'react';
import GalleryTitle from "./GalleryTitle";
import GalleryRow from "./GalleryRow";

const LikedPokemon = () => {
    return (
        <>
            <GalleryTitle isLikedList/>
            <GalleryRow />
        </>
    );
};

export default LikedPokemon;