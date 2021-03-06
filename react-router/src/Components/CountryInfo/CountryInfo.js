import React from 'react';
import { useHistory } from 'react-router';

const CountryInfo = (props) => {
    const country = props.countryInfo;
    const {flag, name, nativeName, capital, region, population, languages, timezones} = country;

    let history = useHistory();
  function handleClick() {
    history.push("/home");
  } 

    return (
        <div className='row'>
            <div className='text-center p-4'>
              <img src={flag} alt="" className='img-fluid' style={{ borderRadius: '5px', height: '350px', width: '550px'}}/>
            </div>
            <div className='p-5'>
                <p>Name : <strong>{name}</strong></p>
                <p>Native Name : <strong>{nativeName}</strong></p>
                <p>Language : <strong>{languages[0].name}</strong></p>
                <p>Capital : <strong>{capital}</strong></p>
                <p>Area : <strong>{region}</strong></p>
                <p>Population : <strong>{population}</strong></p>
                <p>Time-Zone : <strong>{timezones[0]}</strong></p>
                <button onClick={handleClick} className='main-button'>Go Home</button>
            </div>
            
           
        </div>
    );
};

export default CountryInfo;