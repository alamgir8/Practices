import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';


const Comment = () => {
    const {id} = useParams();
    const [comments, setComment] = useState([]);
    useEffect(() => {
        const url = (`https://jsonplaceholder.typicode.com/comments/${id}`)
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, []);
   
    return (
            <Card border="primary" style={{ width: '25rem' }}>
                <Card.Header>ID: <strong>{comments.id}</strong></Card.Header>
                <Card.Body>
                <Card.Title>Name : <strong>{comments.name}</strong></Card.Title>
                <Card.Text>
                Body : <strong>{comments.body}</strong>
                </Card.Text>
                </Card.Body>
            </Card>
       
    );
};

export default Comment;