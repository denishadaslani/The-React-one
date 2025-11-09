import { useParams } from "react-router";

const Product = () => {
        const {name} = useParams();
       
    return (
         <>
         <h1>{name}</h1>
        <h2>proudect</h2>
         </>
    );
}
export default Product;