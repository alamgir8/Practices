import React from 'react';


const ProductDetails = (props) => {
    const {name} = props.product;
   
    
    return (
        <div>
            <h3>This is ProductDetails: {name} </h3>
        </div>
    );
};

export default ProductDetails;