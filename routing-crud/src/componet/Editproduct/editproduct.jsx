import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { getStorageData, setStorageData } from '../../services/storage.data';
import { useNavigate, useParams } from 'react-router';

const Editproduct = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const innitialState = {
        title: "",
        description: "",
        price: "",
        quantity: "",
        category: "",
        image: "",
    }

    const [inputForm, setInputForm] = useState(innitialState);

    const handalchanged = (e) => {
        const { name, value } = e.target;
        setInputForm({ ...inputForm, [name]: value })
    }

    useEffect(() => {
        let data = getStorageData();
        let recored = data.find((v, i) => v.id == id);
        setInputForm(recored);
    }, [id]);

    const handalsubmit = (e) => {
        e.preventDefault();
        let data = getStorageData();
        let update = data.map((v, i) => {
            if(v.id == inputForm.id){
                return inputForm;
            }else{
                return v;
            }
        });
        setStorageData(update);
        setInputForm(innitialState);
        navigate("/");
    }
    return (
        <>
            <h1 style={{ textAlign: "center" }}> edit Product</h1>
            <Container >
                <Form onSubmit={handalsubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Title
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='title' value={inputForm.title} onChange={handalchanged} placeholder="Title" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Description
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='description' value={inputForm.description} onChange={handalchanged} placeholder="Description" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Price
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" name='price' value={inputForm.price} onChange={handalchanged} placeholder="price" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Quantity
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" name='quantity' value={inputForm.quantity} onChange={handalchanged} placeholder="quantity" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="6">
                            <Form.Select name='category' value={inputForm.category} onChange={handalchanged} aria-label="Default select example">
                                <option>Select Category</option>
                                <option selected={inputForm.category == "mobile"} value="mobile">Moblie</option>
                                <option selected={inputForm.category == "Furniture"} value="Furniture">Furniture</option>
                                <option selected={inputForm.category == "Fashion"} value="Fashion">Fashion</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Product img
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='image' value={inputForm.image} onChange={handalchanged} placeholder=" select img url" />
                        </Col>
                    </Form.Group>

                    <Button style={{ textAlign: "center", marginLeft: "20%" }} type='submit' variant="primary">Update</Button>
                </Form>
            </Container>


        </>
    )
};
export default Editproduct;