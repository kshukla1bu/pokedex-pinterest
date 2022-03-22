import React from 'react';
import pokemonP from '../assets/pokemon-p-logo.png'
import pinterestP from '../assets/pinterest-logo-png-1992.png'
import '../styles/Header.css'

const Header = () => {
    const iconStyles = {
        marginTop: '1rem',
        height: '9.5rem',
    }

    return (
        <div className={'header'}>
            <img src={pokemonP} style={iconStyles} alt={'logo'}></img>
            <img src={pinterestP} style={iconStyles} alt={'logo'}></img>
        </div>
    );
};

export default Header;