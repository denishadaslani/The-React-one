import State from "./state";


function Country(props) {
    console.log(props);
    return (
        <>
        <h1> Country:{props.data.country}</h1> 
        <State statedata={props.data.state} citydata={props.data.city} />
        </>
    )
}
export default Country;