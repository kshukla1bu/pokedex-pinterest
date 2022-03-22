import React from 'react';
import CardButton from "./CardButton";
import '../styles/Card.css'

const Card = ({pokemonData}) => {
    return (
        <div className={'card'}>
            <img src={pokemonData.front_img} alt={'pokemon'}/>
            <p>{pokemonData.name}</p>
            <div className={'cardButtonDiv'}>
            <CardButton isLike/>
            <CardButton/>
            </div>
        </div>
    );
};

export default Card;