export const addNewProperty = (data) => {
    return {
        type: "ADD_PROPERTY",
        payload: data
    }
}

export const deleteProperty = (id) => {
    return {
        type: "DELETE_PROPERTY",
        payload: id
    }
}

export const getProperty = (id) => {
    return {
        type: "GET_PROPERTY",
        payload: id
    }
}

export const updateProperty = (data) => {
    return {
        type: "UPDATE_PROPERTY",
        payload: data
    }
}