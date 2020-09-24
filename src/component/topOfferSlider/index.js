import React, { useEffect, useState } from 'react';
import ProductSlider from '../productSlider';
import { fetchAllProducts } from '../../core/services'



const TopOfferSlider = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetchAllProducts(setProducts, setIsLoaded, setError);
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ProductSlider data={product} title="Top Offers" />
        )
    }
}

export default TopOfferSlider;