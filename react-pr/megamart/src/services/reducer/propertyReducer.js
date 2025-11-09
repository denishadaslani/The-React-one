const initalState = {
    products: JSON.parse(localStorage.getItem("products")) || [],
}

export const productReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            let data = JSON.parse(localStorage.getItem("products")) || [];
            // data.push(action.payload)
            data = [...data, action.payload]
            localStorage.setItem("products", JSON.stringify(data));
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case "DELETE_PRODUCT":

            let Data = JSON.parse(localStorage.getItem("products")) || [];
            let updatedata = Data.filter((v, i) => v.id != action.payload);
            localStorage.setItem("products", JSON.stringify(updatedata));
            return {
                ...state,
                products: updatedata
            }

        case "UPDATE_PRODUCT":
            let Getdata = JSON.parse(localStorage.getItem("products")) || [];
            let updateddata = Getdata.map((v, i) => {
                if (v.id == action.payload.id) {
                    return action.payload
                }
                else {
                    return v
                }
            })
            localStorage.setItem("products", JSON.stringify(updateddata));
            return {
                ...state,
                product: null,
                products: updateddata
            }

        case "GET_PRODUCT":
            let getData = JSON.parse(localStorage.getItem('products')) || []
            let singleRec = getData.find(v => v.id == action.payload)
            console.log("Data: ", singleRec);
            return {
                ...state,
                product: singleRec
            }

        default:
            return state;
    }
}