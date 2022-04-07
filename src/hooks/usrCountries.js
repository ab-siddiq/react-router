import { useEffect, useState } from "react"

const useCountries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
    .then(data=>setCountries(data))
    }, [countries])
    return [countries, setCountries];
}

export default useCountries;

