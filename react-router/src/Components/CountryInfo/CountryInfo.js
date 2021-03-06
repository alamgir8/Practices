import React from 'react';

const CountryInfo = (props) => {
    const country = props.countryInfo;
    console.log(country);

    const {flag, name, nativeName, capital, region, population, languages} = country;
    return (
        <div className='container'>
            <div className='text-center p-4'>
              <img src={flag} alt=""/>
            </div>
            <div className='p-5'>
                <p>Name : <strong>{name}</strong></p>
                <p>Native Name : <strong>{nativeName}</strong></p>
                <p>Language : <strong>{languages[0].name}</strong></p>
                <p>Capital : <strong>{capital}</strong></p>
                <p>Area : <strong>{region}</strong></p>
                <p>Population : <strong>{population}</strong></p>
            </div>
            
           
        </div>
    );
};

export default CountryInfo;