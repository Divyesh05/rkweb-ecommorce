import { apiEndPoint } from '../../core/helpers';

export const fetchSubCategories = async (id, setCategories, setIsLoaded, setError) => {
    let form = new FormData();
    form.append("category", id);

    const requestOptions = {
        method: "POST",
        headers: new Headers({ enctype: "multipart/form-data" }),
        body: form
    };

    fetch(apiEndPoint + "web/getAllChildCategory", requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setCategories(result.data.map((d, i) => d.id));
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
}

export const fetchProducts = async (category, setProducts, setIsLoaded, setError) => {
    let form = new FormData();
    form.append("isHome", 1);
    form.append("category", category);

    const requestOptions = {
        method: "POST",
        headers: new Headers({ enctype: "multipart/form-data" }),
        body: form
    };

    fetch(apiEndPoint + "web/getHomeAllProduct", requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setProducts(result.data);
            },

            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
}
export const fetchAllProducts = async (setProducts, setIsLoaded, setError) => {
    let form = new FormData();
    form.append("is_offer", 1);

    const requestOptions = {
        method: "POST",
        headers: new Headers({ enctype: "multipart/form-data" }),
        body: form
    };

    fetch(apiEndPoint + "web/getAllProduct", requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setProducts(result.data);
            },

            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
}

export const fetchHomeBanners = async (setBanners, setIsLoaded, setError) => {

    const requestOptions = {
        method: "POST",
        headers: new Headers({ enctype: "multipart/form-data" }),
        body: {}
    };

    fetch(apiEndPoint + "web/getHomeBanners", requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setBanners(result.data);
            },

            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
}