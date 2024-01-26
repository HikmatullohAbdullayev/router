import React from 'react';

function Header(props) {
    return (
        <nav className='container mx-auto shadow-sm '>
            <ul className='gap-5 flex items-center '>
                <li className='font-semibol d text-2xl'>Home</li>
                <li className='font-semibol d text-2xl'>About</li>
                <li className='font-semibold text-2xl'>Magazin</li>
            </ul>
        </nav>
    );
}

export default Header;