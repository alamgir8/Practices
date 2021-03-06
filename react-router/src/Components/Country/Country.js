import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  } from "./Country.css";

const Country = (props) => {
    const country = props.country;
    console.log(country);
    const {flag, name, region} = country;

    return (
            <div className='col-12 col-md-6 col-sm-6 col-lg-4'>
                <div className="m-2">
                    <Card className='p-3' style={{ width: '20rem', height: '350px'}}>
                        <Card.Img variant="top" src={flag} style={{ borderRadius: '5px', height: '200px'}}/>
                        <Card.Body className='p-3 mt-2'>
                        <Card.Title >{name}</Card.Title>
                        <Link to={`/about/${name}`}> <button className='main-button'>Know More</button> </Link>
                    </Card.Body>
                    </Card>
                </div>
            </div>
    );
};

export default Country;