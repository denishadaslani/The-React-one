import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const AddStudent = () => {

    const initialState = {
        name: '',
        email: '',
        gender: '',
        course: [],
        hobbies: '',
        image: ''
    }

    const [inputform, setInputForm] = useState(initialState);

    const handelChange = (e) => {

    }

    const handelSubmit = () => {
        e.preventDefault();
        alert('hello')
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Add Student</h1>
            <Container>
                <Form>
                    <Form.Group as={Row} className="mb-3 pt-5 ms-5" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Name:
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='name' value={inputform.name} onChange={handelChange} placeholder="full Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Email:
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="email" name='email' value={inputform.email} onChange={handelSubmit} placeholder="email" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Gender:
                        </Form.Label>
                        <Col sm="6">
                            <Form.Check
                                type={"radio"} label={`Male`} name='gender' value={"male"} />
                            <Form.Check
                                type={"radio"} label={`Female`} name='gender' value={"female"}
                            />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3 ms-5" controlId="formPlaintextCourse">
                        <Form.Label column sm="2">
                            Course:
                        </Form.Label>
                        <Col sm="6">
                            <Form.Select name='course' value={inputform.course} onChange={handelSubmit}>
                                {["Full Stack Developer", "UI-UX Designer", "Graphic Designer", "Web Developer", "Web Designer"].map((v, i) => (
                                    <option key={i} value={v}>{v}</option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5" controlId="formPlaintextCourse">
                        <Form.Label column sm="2">
                            Hobbies:
                        </Form.Label>
                        <Col sm="6" style={{ display: "flex", flexDirection: "column" }} >
                            <Form.Check type={"checkbox"} label={`Reading`} name='hobbies' value={"reading"} />
                            <Form.Check type={"checkbox"} label={`singing`} name='hobbies' value={"singing"} />
                            <Form.Check type={"checkbox"} label={`sport`} name='hobbies' value={"sport"} />
                            <Form.Check type={"checkbox"} label={`music`} name='hobbies' value={"music"} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            image:
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='image' value={inputform.image} onChange={handelSubmit} placeholder="Enter profile image url" />
                        </Col>
                    </Form.Group>

                    <Button variant="primary" onSubmit={() => handelSubmit()} style={{ marginLeft: "40%" }} type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    )
};
export default AddStudent;