import React from 'react';
import YouMightLike from "./YouMightLike";
import LikedPokemon from "./LikedPokemon";

const GalleryContainer = () => {
    // const [ likedList, setLikedList ] = useState([])

    return (
        <>
            <YouMightLike />
            <LikedPokemon />
        </>
    );
};

export default GalleryContainer;