import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const User = (props) => {
   
    const {id, title, body} = props.user;

    return (
        <div className='col-12 col-lg-4 col-md-4'>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>User ID : <strong>{id}</strong></Card.Header>
                <Card.Body>
                <Card.Title><strong>{title}</strong></Card.Title>
                <Card.Text>
                <strong>{body}</strong>
                </Card.Text>
                </Card.Body>
                <Link to={`/comment/${id}`}> <button className='btn btn-success' >See Details</button> </Link>
            </Card>
        </div>
    );
};

export default User;