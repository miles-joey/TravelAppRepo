import React, { useState, useEffect } from 'react';


function TourismClick(link) {
    window.open(link, '_blank');
}


// experimenting with shuffling results 
function randomizeCountries(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
// used Fisher-Yates Shuffle. found here:
// https://medium.com/@khaledhassan45/how-to-shuffle-an-array-in-javascript-6ca30d53f772


function GetCountry() {
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

    const shuffledCountries = randomizeCountries([...countries]);


let finalCountries = 0;

    return (
    <div>
    {/* <h2>Country List</h2> */}
    <ul className='returnedCountries'>
        {shuffledCountries.map((country) => {
            // change this number if you want to add more results
            if (finalCountries < 3) {

            const name=country.name.common
            const region=country.subregion
            const capital=country.capital
            const flag=country.flag
            const sideOfRoad=country.car.side
            const population=country.population
            const timezone=country.timezones

            const languages=country.languages
            const allLanguages = Object.values(languages || {});

            const currency=country.currencies
            const allCurrencies = Object.values(currency || {});
            

            finalCountries++;
            // this is part of the randomizing & number of countries displayed
            return(
                <li onClick={() => TourismClick(`https://www.google.com/search?q=tourism+${name}`
                )} className='countryContainer' key={country.cca3}>
                    <div className='countryName'>{name}&ensp;{flag}</div>

                    <div className='region'>{region}</div>
                    <div className='timezone'>
                        {timezone}
                    </div>
                    <div className='capital'>
                        <p>Capital City:</p>
                        {capital}
                    </div>


                    <div className='currency'>
                        <p>Currencies:</p>
                        {allCurrencies.map((currency, index) => (
                        <div key={index}>
                            <ul>
                                <li className='currencyNameSymbol'><div className='currencyName'>{currency.name}</div>&ensp;&ensp;<div className='currencySymbol'>{currency.symbol}</div></li>
                            </ul>
                            </div>

                        
                        ))}
                    </div>

                    <div className='languages'>
                        <p>Top 3 Languages:</p>
                            {allLanguages.slice(0,3).map((response, index) => (
                            
                            <ul className='languagesDirection'>
                                <li key={index}>{response}</li>
                            </ul>
                            
                        ))}
                    </div>

                    <div className='population'>
                        <p>Population:</p>
                        {population}
                    </div>
                    
                    <div className='driveSide'>
                        Drive on the <div className='sideOfRoadFormatting'>{sideOfRoad}</div> side of the road
                    </div>
                    {/* add code for 'left' one color, 'right' another color*/}
                </li>
            )
        }
    })}
    </ul>
    </div>
    );
}

export default GetCountry;