import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CountryInfo from '../CountryInfo/CountryInfo';

const CountryDetails = () => {
    const {name} = useParams();

    const [ country, setCountry] = useState([]);

    useEffect(() => {
        const url = (`https://restcountries.eu/rest/v2/name/${name}`)
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))

    }, [])
    return (
        <div>
            <h3>Country Details of <strong>{name}</strong> </h3>
            {
                country.map(countryInfo => <CountryInfo key={countryInfo.alpha2Code} countryInfo={countryInfo}></CountryInfo>)
            }
        </div>
    );
};

export default CountryDetails;