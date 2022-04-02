import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
        .then(data=>setCountries(data))
    }, [countries])
    return (
        <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2'>
            {countries.map(country => <Link to={`/country/${country.name.common}`}><div className='flex items-center justify-center text-green-300 font-bold text-xl bg-green-900 m-3 h-16'>{country.name.common}</div></Link>)}
        </div>
    );
};

export default Countries;