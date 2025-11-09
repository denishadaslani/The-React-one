const initalState = {
    properties: JSON.parse(localStorage.getItem('proper')) || [],
    isLoading: false
}
export const propertyReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_PROPERTY":
            let data = JSON.parse(localStorage.getItem('proper')) || [];
            // data.push(action.payload)
            data = [...data, action.payload];
            localStorage.setItem('proper', JSON.stringify(data))
            return {
                ...state,
                properties: [...state.properties, action.payload]
            }
        case "DELETE_PROPERTY":
            let Data = JSON.parse(localStorage.getItem('proper')) || []
            let updateData = Data.filter(v => v.id != action.payload)
            localStorage.setItem('proper', JSON.stringify(updateData))
            return {
                ...state,
                properties: updateData
            }


        case "UPDATE_PROPERTY":
            let GetData = JSON.parse(localStorage.getItem('proper')) || []
            let updatedData = GetData.map(v => {
                if (v.id == action.payload.id) {
                    return action.payload
                } else {
                    return v;
                }
            })
            localStorage.setItem('proper', JSON.stringify(updatedData))
            return {
                ...state,
                property: null,
                properties: updatedData
            }
        
            
        
        case "GET_PROPERTY":
            let getData = JSON.parse(localStorage.getItem('proper')) || []
            let singleRec = getData.find(v => v.id == action.payload)
            console.log("Data: ", singleRec);
            return {
                ...state,
                property: singleRec
            }
       
        default:
            return state;
    }
}