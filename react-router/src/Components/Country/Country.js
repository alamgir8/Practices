import React from 'react';
import { Link } from 'react-router-dom';
import {  } from "./Country.css";

const Country = (props) => {
    const country = props.country;
    console.log(country);
    const {name, region} = country;

    

    return (
        <div className='container'>
            <h2>Country : <small> {name}</small> </h2>
            <h3>Area : <small>{region}</small></h3>
            <Link to={`/about/${name}`}>Show Details of {name}</Link>
            
        </div>
    );
};

export default Country;