import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(categoryContext);


    return (
        <div>
            <h3>This is Header : {category}</h3>
            <button onClick={() => setCategory('Mobile')}>Mobile</button>
            <button onClick={() => setCategory('Camera')}>Camera</button>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>
        </div>
    );
};

export default Header;