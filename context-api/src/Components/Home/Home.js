import React, { useContext } from 'react';
import { categoryContext } from '../../App';
import Product from '../Product/Product';

const Home = () => {
   const category = useContext(categoryContext);

    const divStyle = {
        border: '2px solid grey',
    }
    return (
        <div style={divStyle}>
            <h3>This is home : {category}</h3>
            <Product />
        </div>
    );
};

export default Home;