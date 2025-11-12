import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { googleSignInAsync, signInAsync } from "../../services/action/autentication";


const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { Error, user } = useSelector((state) => state.authReducer);

    const [inputForm, setInputForm] = useState({
        email: "",
        password: ""
    });

    const HandleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(inputForm);
        dispatch(signInAsync(inputForm))
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInAsync())
    }

    useEffect(() => {
        if (user) {
            navigate("/");   
        }
    }, [user]);
    return (
        <>
            <Container>
                <h2>Login Form</h2>

                {Error ? <p>{Error}</p> : ""}

                <Form onSubmit={HandleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="email" value={inputForm.email} onChange={HandleChanged} placeholder="Enter Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" name="password" value={inputForm.password} onChange={HandleChanged} placeholder="Enter Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">

                        </Form.Label>
                        <Col sm="10">
                            <button type='submit'>SignIn</button>
                        </Col>
                    </Form.Group>
                </Form>
                <Button onClick={handleGoogleSignIn}> Sign In With Google</Button>
                <p>Create a New Account ? <Link to="/signUp">SignUp</Link> </p>
            </Container>
        </>
    )
}

export default SignIn;