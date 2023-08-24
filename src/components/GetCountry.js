import React, { useState, useEffect } from 'react';

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


let finalCountries = 0;

    return (
        <div>
    <h1>Country List</h1>
    <ul>
        {countries.map(country => {
            if (finalCountries < 3) {

            const name=country.name.common
            const region=country.region

            // const language=country.languages
            // const allLanguages=[]
            //     for (const mainLanguage in language){
            //         allLanguages.push(language[mainLanguage])
            //     }
                
            const sideOfRoad=country.car.side
            // const currency=country.currencies
            // const allCurrencies=[]
            //     for (const mainCurrency in currency){
            //         allCurrencies.push(currency[mainCurrency])
            
            const languages=country.languages
            const allLanguages = Object.values(languages || {});
            

            finalCountries++;
            return(
                <li className='countryContainer' key={country.cca3}>
                    <div className='countryName'>{name}</div>
                    <div className='region'>{region}</div>

                    {/* <div className='languages'>
                        {allLanguages.map((response)=>{
                            return(
                                <p>{response}</p>
                            )
                        })}
                    </div> */}


                    {/* <div className='currency'>
                        {allCurrencies.map((response)=>{
                            return(
                                <p>{response}</p>
                            )
                        })
                        }
                    </div> */}
                    <div className='driveSide'>Drive on the {sideOfRoad} side of the road</div>

                    <div className='languages'>
                        <p>Top 3 Languages:</p>
                                {allLanguages.slice(0,3).map((response, index) => (
                                    <>
                                    <ul className='languagesDirection'>
                                        <li key={index}>{response}</li>
                                    </ul>
                                    </>
                                ))}
                            </div>
                </li>
            )
                                }
    })}
    </ul>
    </div>
    );
}

export default GetCountry;