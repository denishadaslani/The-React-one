import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createUserAsync } from "../../services/action/autentication";
import { Link } from "react-router-dom";



const SignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { Error, isCreated } = useSelector(state => state.authReducer);

    const [inputForm, setInputForm] = useState({
        email: "",
        password: ""
    })

    const Handelchange = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(inputForm);
        dispatch(createUserAsync(inputForm));
    }

    useEffect(() => {
        if (isCreated) {
            navigate("/signIn");
        }
    }, [isCreated])

    return (
        <>
            <Container>
                <h2>Register Form</h2>
                {Error ? <p>{Error}</p> : ""}
                <Form onSubmit={HandleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="email" value={inputForm.email} onChange={Handelchange} placeholder="Enter Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" name="password" value={inputForm.password} onChange={Handelchange} placeholder="Enter Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">

                        </Form.Label>
                        <Col sm="10">
                            <button type='submit'>SignUp</button>
                        </Col>
                    </Form.Group>
                </Form>
                <p>Already an Account ? <Link to="/signIn">SignIn</Link> </p>
            </Container>
        </>
    )
}

export default SignUp;