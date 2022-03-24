import React from 'react';
import CardButton from "./CardButton";
import '../styles/Card.css'
import pokemonDefault from '../assets/pokemon-default.png'

const Card = ({ modalList, pokemonData, onLike, onDisLike, forLike }) => {
    return (
        <div className={'card'}>
            <img src={pokemonData.front_img || pokemonDefault} alt={'pokemon'}/>
            <p>{pokemonData.name}</p>
            {modalList ? <></> :
            <div className={'cardButtonDiv'}>
                {!forLike ? <CardButton isLike onClick={onLike}/> : <></>}
            <CardButton onClick={onDisLike}/>
            </div>}
        </div>
    );
};

export default Card;