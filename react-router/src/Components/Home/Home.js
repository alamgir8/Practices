import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Header from '../Header/Header';
import {  } from "./Header.css";

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
        
        <div >
             <Header></Header>
             <div className='container'>
                <div className='row'>
                {
                    countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
                }
                </div>
            </div> 
        </div>
    );
};

export default Home;