import React, { useEffect, useState } from 'react';
import ProductSlider from '../productSlider';
import { fetchSubCategories, fetchProducts } from '../../core/services'



const GetHomeProductSlider = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [flag, setFlag] = useState(true);
    const [category, setCategories] = useState([]);
    const [product, setProducts] = useState([]);

    let id = props.id;
    useEffect(() => {
        fetchSubCategories(id, setCategories, setIsLoaded, setError);
    }, [id]);


    if (category.length > 0 && flag === true) {
        fetchProducts(category, setProducts, setIsLoaded, setError);
        setFlag(false);
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ProductSlider data={product} title={props.title} />
        )
    }
}

export default GetHomeProductSlider;