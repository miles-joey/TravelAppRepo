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
        {countries.map(country => (
        <li key={country.cca3}>{country.name.common}</li>
        ))}
    </ul>
    </div>
    );
}

export default Test;