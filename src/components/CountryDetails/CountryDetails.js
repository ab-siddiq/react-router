import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
        .then(data=>(setCountry(data)))
    }, [countryName])
    console.log(typeof country)
    return (
        <div>
            country details {countryName}
            
        </div>
    );
};

export default CountryDetails;