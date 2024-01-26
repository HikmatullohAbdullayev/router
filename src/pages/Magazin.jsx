import React from 'react';

function Magazin(props) {
    return (
      <div>
        <h1 className="font-bold text-2xl text-center p-3">О нас</h1>
        <div className='flex justify-around items-center'>
          <h2 className='font-medium text-xl text-center p-4'> Magazin-1</h2>
          <h2 className='font-medium text-xl text-center p-4'>Magazin-2</h2>
        </div>
      </div>
    );
}

export default Magazin;