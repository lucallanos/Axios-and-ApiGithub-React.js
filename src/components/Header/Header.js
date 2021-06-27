import React from 'react';
import './Header.css';
import logo from './Github-WhiteLogo.png';

function Header({title}) {
    return (
        <div className='Header'>
            <h1>{title}</h1>
            <img src={logo} alt="Github-Logo" width='180px' />
        </div>
    )
}

Header.defaultProps = {
    title: 'Default title',
}

export default Header
