import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Country from '../Country/Country';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [CountryDetails, setCountryDetails] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
       
        fetch(url)
            .then(res => res.json())
        .then(data=>(setCountryDetails(data)))
    }, [countryName])
     
   
    return (
        <div>
            {
                CountryDetails.map(country => <Country country={country}></Country>)
            }
            
            
        </div>
    );
};

export default CountryDetails;