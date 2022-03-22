import React from 'react';

const CardButton = ({ isLike }) => {
    return (
        <div>
            {isLike ? <button>Like</button> : <button>Dislike</button>}
        </div>
    );
};

export default CardButton;