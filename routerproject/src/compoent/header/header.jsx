import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';
const Header = () => {
    const navigate = useNavigate();
    const handelclick = () => {
        console.log("Click");
        navigate("/about");
    }
    return (
        <>
            <h1 style={{ backgroundColor: "green", color: "white", textAlign: "center" }}>header </h1>
            <h2>Hello</h2>
            <Link to={"/"}>home</Link>&nbsp;&nbsp;
            <Link to={"/about"}>about</Link>&nbsp;&nbsp;
            <Link to={"/contact"}>contact</Link>&nbsp;&nbsp;
            <Link to={"/faq"}>faq</Link>&nbsp;&nbsp;
            <Button onClick={handelclick} >about</Button>


        </>
    )
};

export default Header