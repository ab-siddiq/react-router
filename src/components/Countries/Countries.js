import { Link } from 'react-router-dom';
import useCountries from '../../hooks/usrCountries';

const Countries = () => {
    const [countries] = useCountries();
    
    return (
        <div className="">
         <p className='text-center font-mono font-bold text-3xl mt-10 mb-5 text-green-700'>Total Country: { countries.length}</p>
        <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 text-center gap-4 mx-5'>
           
            {countries.map(country => <Link to={`/country/${country.name.common}`}><div className='flex items-center justify-center text-green-300 font-bold text-xl bg-green-900  h-16 p-2 leading-5 rounded hover:scale-105 duration-200'>{country.name.common}</div></Link>)}
        </div>
        </div>
    );
};

export default Countries;