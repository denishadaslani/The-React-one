export const Reduser = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "inc":
            return state + 1;
        case "dec":
            return state - 1;
        default:
            return state;
    }
}   