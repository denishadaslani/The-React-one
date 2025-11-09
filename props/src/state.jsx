import City from "./city";

function State(props){
    console.log(props);
    return(
        <>
             <h1>State:{props.statedata}</h1>
             <City citydata={props.citydata} />
        </>
    )
}
export default State;