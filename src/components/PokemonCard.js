import React, {useEffect, useState} from 'react';
import '../styles/PokemonCard.css'
import Card from "./Card";

const PokemonCard = ({pokemonObj}) => {
    const [pokemonData, setPokemonData] = useState({})
    const [error, setError] = useState([])


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
                        weight: data.weight,
                        type: data.types[0].type.name
                    })
                },
                (err) => {
                    setError(err)
                })
        }
    }, )

    return (
        <div className={'pokemonCard'}>
            { pokemonData ?
                <>
            <Card pokemonData={pokemonData}/>
                    </> :
                <p>{error}</p>
            }
        </div>
    );
};

export default PokemonCard;