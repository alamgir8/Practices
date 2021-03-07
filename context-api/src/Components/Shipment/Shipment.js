import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(categoryContext);
    return (
        <div>
            <h3>This is Shipment</h3>
            <button onClick={() => setCategory(category + 2)}>increase</button>
        </div>
    );
};

export default Shipment;