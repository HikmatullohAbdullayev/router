import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header(props) {
    return (
        <nav className='container mx-auto shadow-sm '>
            <ul className='gap-5 flex items-center p-4'>
    <li className='font-semibold text-2xl'><NavLink to="/" >Home</NavLink></li>
    <li className='font-semibold text-2xl'><NavLink to="/about">About</NavLink></li>
    <li className='font-semibold text-2xl'><NavLink to="/magazin">Magazin</NavLink></li>
</ul>

        </nav>
    );
}

export default Header;


