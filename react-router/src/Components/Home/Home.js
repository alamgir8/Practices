import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const url = ('https://restcountries.eu/rest/v2/all')
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
        .catch(error => console.log(error))

    }, []);

    
    return (
        <div>
            <h3>This is home section</h3>
            <h4>Country : {countries.length}</h4>
            {
                countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
            }
        </div>
    );
};

export default Home;