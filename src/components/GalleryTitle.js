import React from 'react';
import '../styles/GalleryTitle.css'

const GalleryTitle = ({ isLikedList, modalTitle }) => {
    return (
        <>
        { !modalTitle ?
    <div className={'gTitle'}>
        <h2>{!isLikedList ? 'You Might Like' : 'Your Favorites'}</h2>
    </div> : <div className={'gTitle'}>
                <h2>{'Some recommended pokemons based on type'}</h2>
            </div>
        }</>
    );
};

export default GalleryTitle;