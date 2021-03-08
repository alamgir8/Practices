import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const url = ('https://jsonplaceholder.typicode.com/posts')
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))

    }, [])
    return (
        <div className='container'>
            <div className="row">
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
            </div>
        </div>
    );
};

export default Home;