import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { countryName } = useParams();
    return (
        <div>
            country details {countryName}
        </div>
    );
};

export default CountryDetails;