import axios from "axios";

export const addNewProduct = (data) => {
    return {
        type: "ADD_PRODUCT_SUC",
        payload: data
    }
}

export const addNewProductRej = (msg) => {
    return (
        {
            type: "ADD_PRODUCT_REJ",
            message: msg
        }
    )
}

export const getAllProduct = (data) => {
    return (
        {
            type: "GET_ALL_PRODUCT_SUC",
            payload: data
        }
    )
}

export const getAllProductRej = (msg) => {
    return (
        {
            type: "GET_ALL_PRODUCT_REJ",
            message: msg
        }
    )
}

export const deleteProductRej = (msg) => {
    return (
        {
            type: "DELETE_PRODUCT_REJ",
            message: msg
        }
    )
}

export const getProduct = (data) => {
    return (
        {
            type: "GET_PRODUCT_SUC",
            payload: data
        }
    )
}

export const getProductRej = (msg) => {
    return (
        {
            type: "GET_PRODUCT_REJ",
            message: msg
        }
    )
}

export const updateProduct = () => {
    return (
        {
            type: "UPDATE_PRODUCT_SUC",
        }
    )
}

export const updateProductRej = (msg) => {
    return (
        {
            type: "UPDATE_PRODUCT_REJ",
            message: msg
        }
    )
}

//middleware

export const getallproductAsync = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => dispatch(getAllProduct(data)))
            .catch(err => dispatch(getAllProductRej(err.message)))
    }
}

export const addNewProductAsync = (data) => {
    return (dispatch) => {
        axios.post("http://localhost:3000/products", data)
            .then((res) => dispatch(addNewProduct(res.data)))
            .catch(err => dispatch(addNewProductRej(err.message)))
    }
}


export const deleteProductAsync = (id) => {
    return (dispatch) => {
        console.log(id);
        axios.delete(`http://localhost:3000/products/${id}`)
            .then(() => dispatch(getallproductAsync()))
            .catch(err => dispatch(deleteProductRej(err.message)))
    }
}

export const getProductAsync = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then((res) => dispatch(getProduct(res.data)))
            .catch(err => dispatch(getProductRej(err.message)))
    }
}

export const updateProductAsync = (data) => {
    return (dispatch) => {
        axios.put(`http://localhost:3000/products/${data.id}`, data)
            .then(() => dispatch(updateProduct()))
            .catch(err => dispatch(getProductRej(err.message)))
    }
}