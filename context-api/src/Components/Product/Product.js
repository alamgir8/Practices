import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../App';
import ProductDetails from '../ProductDetails/ProductDetails';


const allProducts = [
        {name:'Samsung', category:'Mobile'}, {name:'Nokia', category:'Mobile'}, {name:'Walton', category:'Mobile'},
        {name:'Dell', category:'Laptop'}, {name:'Asus', category:'Laptop'}, {name:'Apple', category:'Laptop'},
        {name:'Cannon ', category:'Camera'}, {name:'Nikkon', category:'Camera'}, {name:'Sony', category:'Camera'}
]

const Product = () => {
    const [category] = useContext(categoryContext);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const matchedProduct = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProduct);
    }, [category])
   
    return (
        <div>
            <h3>This is Product </h3>
            {
                products.map(pd => <ProductDetails product={pd}></ProductDetails>)
            }
        </div>
    );
};

export default Product;