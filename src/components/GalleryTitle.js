import React from 'react';
import '../styles/GalleryTitle.css'

const GalleryTitle = ({isLikedList}) => {
    return (
        <div className={'gTitle'}>
            <h2>{!isLikedList ? 'You Might Like' : 'Your Liked List'}</h2>
        </div>
    );
};

export default GalleryTitle;