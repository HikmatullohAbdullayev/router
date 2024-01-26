import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Magazin(props) {
    return (
      <div>
        <h1 className="font-bold text-2xl text-center p-3">О нас | Magazin</h1>
        <div className='flex justify-around items-center'>
          <h2 className='font-medium text-xl text-center p-4'> <NavLink to="texnika">Texnika-1</NavLink></h2>
          <h2 className='font-medium text-xl text-center p-4'><NavLink to="smartfon">Smartfon-2</NavLink></h2>
        </div>
        <section>
            <Outlet/>
        </section>
      </div>
    );
}

export default Magazin;