import React, {useEffect, useState} from 'react';
import pokemonDefault from '../assets/pokemon-default.png'
import PokemonCard from "./PokemonCard";

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
    },[])

    console.log("ANimation -->", recommendList)

    const getRecommendedList = () => {
        let recList = []
        for(let i = 0; i<recommendList.length; i++)
        {
            recList.push(<PokemonCard key={i} pokemonObj={recommendList[i]} />)
        }
        return recList
    }

    return (
        <div>
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
            <button onClick={setModalClose}>Close</button>

            <div className={'rListDiv'}>
                {
                    getRecommendedList()
                }
            </div>
        </div>
    );
};

export default DetailModal;