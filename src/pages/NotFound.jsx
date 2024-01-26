import React from 'react';
import notFoundImg from "../assets/NotFound.png" 

function NotFound(props) {
    return (
        <div>
            <img className='w-[800px] mx-auto' src={notFoundImg} alt="Page Not Found" />
        </div>
    );
}

export default NotFound;