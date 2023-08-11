import React, { useState, useEffect } from 'react';

function Test() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        //fetching data from teh API using built-in fetch APi
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            setCountries(data);
        })
        .catch(error => {
            console.error('Error fetching the data', error);
            //error handling, could be better?
        });
    }, []);

    return (
        <div>
    <h1>Country List Test</h1>
    <ul>
        {countries.map(country => {
            const name=country.name.common
            const region=country.region
            // const language=country.languages.ara
            // const currency=country.currencies.SAR.name
            const sideOfRoad=country.car.side
            return(
                <li className='countryContainer' key={country.cca3}>
                    <div>{name}</div>
                    <div>{region}</div>
                    {/* <div>{language}</div> */}
                    {/* <div>{currency}</div> */}
                    <div>Drive on the {sideOfRoad} side of the road</div>
                </li>
            )
    })}
    </ul>
    </div>
    );
}

export default Test;