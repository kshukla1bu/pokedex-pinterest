import React from 'react';

const CardButton = ({ isLike, onClick }) => {
    return (
        <div>
            {
                isLike ?
                <button onClick={onClick}>Like</button> :
                <button onClick={onClick}>Dislike</button>
            }
        </div>
    );
};

export default CardButton;