import React, {useEffect, useState} from 'react';
import '../styles/PokemonCard.css'
import Card from "./Card";
import {generateRandomColor} from "../utils/Utilities";

const PokemonCard = ({
                         modalList,
                         likedList,
                         pokemonObj,
                         pokemonList,
                         setLikedList,
                         setModalOpen,
                         setShowPokemon,
                         setYouMayLikeList
}) => {
    const [pokemonData, setPokemonData] = useState({})
    const [error, setError] = useState([])

    const onLike = (e) => {
        e.stopPropagation()
        const likedItem = pokemonList.find(o => o.name === pokemonData.name)
        setLikedList([...likedList, likedItem])
        setYouMayLikeList(pokemonList.filter(item => item.name !== likedItem.name))

    }

    const onDisLike = (e) => {
        e.stopPropagation()
        if(setYouMayLikeList!==undefined) {
            setYouMayLikeList(pokemonList.filter(item => item.name !== pokemonData.name))
        } else {
            setLikedList(likedList.filter(item => item.name !== pokemonData.name))
        }
    }

    const cardOnClick = () => {
        setModalOpen()
        setShowPokemon({
            name: pokemonData.name,
            baseExp: pokemonData.baseExp,
            height: pokemonData.height,
            front_img: pokemonData.front_img,
            front_shiny: pokemonData.front_shiny,
            weight: pokemonData.weight,
            type: pokemonData.type,
        })
    }

    useEffect(() => {
        if(pokemonObj.url && !pokemonData.name) {
            fetch(pokemonObj.url).then(response => {
                if (response.status === 200)
                    return response.json()
            }).then(data => {
                    setPokemonData({
                        name: pokemonObj.name,
                        baseExp: data.base_experience,
                        height: data.height,
                        front_img: data.sprites.front_default,
                        front_shiny: data.sprites.front_shiny,
                        weight: data.weight,
                        type: data.types[0].type.name
                    })
                }, (err) => {
                    setError(err)
                })}}, )

    return (
        <>
        <div
            className={'pokemonCard'}
            style={{backgroundColor:generateRandomColor()}}
            onClick={cardOnClick}
        >
            { pokemonData ?
                <>
            <Card
                pokemonData={pokemonData}
                onDisLike={onDisLike}
                modalList={modalList}
                onLike={onLike}
                forLike={!setYouMayLikeList}
            />
                    </> :
                <p>{error}</p>
            }
        </div>
        </>
    );
};

export default PokemonCard;