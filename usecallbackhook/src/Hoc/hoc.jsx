import Buttoncomp from "../Buttoncomp/Buttoncomp";

const Hoc = (Buttoncomp) => {
    return ({isloading}) => {

            if(isloading){
                return <h1>Loading...</h1>
            }
            else{
                return <Buttoncomp/>
            }
    }   
}

export default Hoc;

