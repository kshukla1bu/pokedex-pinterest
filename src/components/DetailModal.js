import React, {useEffect, useState} from 'react';
import pokemonDefault from '../assets/pokemon-default.png'
import PokemonCard from "./PokemonCard";
import GalleryTitle from "./GalleryTitle";
import '../styles/DetailModal.css'

const DetailModal = ({
                         setModalClose,
                         showPokemon,
}) => {
    const [recommendList, setRecommendList] = useState([])
    const [, setError] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/'+showPokemon.type).then(response => {
            if(response.status === 200)
                return response.json()
        }).then(data => {
                setRecommendList(data.pokemon.slice(0, 10))
            },
            (err) => {
                setError(err)
            })
    },[showPokemon.type])

    const getRecommendedList = () => {
        let recList = []
        for(let i = 0; i<recommendList.length; i++)
        {
            recList.push(<PokemonCard
                key={i}
                modalList
                pokemonList={recommendList}
                pokemonObj={recommendList[i].pokemon} />)
        }
        return recList
    }

    return (
        <div>
            <div className={'modalCloseDiv'}>
                <button
                className={'modalCloseButton'}
                onClick={setModalClose}>CLOSE[X]</button>
            </div>
            <div>
            <img
                src={showPokemon.front_img || pokemonDefault}
                style={{height:'20rem',}}
                alt={'pokemon'}
            />
            <img
                src={showPokemon.front_shiny || pokemonDefault}
                style={{height:'20rem',}}
                alt={'shiny pokemon'}
            />
            </div>
            <h1>{showPokemon.name.toUpperCase()}</h1>
            <p>{'Type: '+showPokemon.type}</p>
            <p>{'Base Exp: '+showPokemon.baseExp}</p>
            <p>{'Height: '+showPokemon.height}</p>
            <p>{'Weight: '+showPokemon.weight}</p>
            <GalleryTitle modalTitle />
            <div className={'rListDiv'}>
                {
                    getRecommendedList()
                }
            </div>
        </div>
    );
};

export default DetailModal;