import React from 'react';

const Country = ({country}) => {
   console.log(country)
    return (
        <div className=" mt-10">
            <p className=' text-center text-4xl font-mono font-bold'>Country Details</p>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 justify-evenly items-center mt-5  mx-auto py-20 lg:px-4 sm:px-1 border-2 lg:w-2/3 sm:w-full sm:mx-3'>
            
                <div className="bg-grey-200 mr-10 md:mx-auto">
                
                    <img src={country.flags.png} alt="" />
                    
                </div>
                <div className="font-mono text-2xl md:mt-3 md:mx-auto">
                    <p>Country Name: {country.name.common}</p>
                    <p>Capital: {country.capital}</p>
                    <p>Sub Region: { country.subregion}</p>
                    <p>Region: { country.region}</p>
                    <p>Population: { country.population}</p>
                    <p>Status: { country.status}</p>
                    {/* <p>TimeZones: { country.timezones}</p> */}
                </div>
                
            </div>
        </div>
    );
};

export default Country;