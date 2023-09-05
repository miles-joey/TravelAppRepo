import React, { useState } from 'react';
import GetCountry from './GetCountry';


function Button() {
    const [buttonText, setButtonText] = useState('Lets Go!');
    const [isVisible, setVisibility] = useState(false);

    const handleClick = () => {
    setButtonText('Search Again?');
    setVisibility(!isVisible);
    };

    return (
    <div className='travelButton'>
        <button onClick={handleClick} className="travelButton">
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