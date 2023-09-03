import React, { useState, useEffect } from 'react';
import GetCountry from './GetCountry';


function Button() {
    const [buttonText, setButtonText] = useState('Click Me');
    const [isVisible, setVisibility] = useState(false);

    const handleClick = () => {
    setButtonText('Search Again?');
    setVisibility(!isVisible);
    };

    return (
    <div>
        <button onClick={handleClick} className="my-button">
        {buttonText}
        </button>
        {isVisible && (
            <div className='secretDiv'>
                <GetCountry />
            </div>
        )}
    </div>
    );
}


export default Button;