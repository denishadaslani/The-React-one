import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { getStorageData, setStorageData } from '/src/services/storage.data';
import { useNavigate } from 'react-router';

const AddProduct = () => {

    const navigate = useNavigate();


    const innitialState = {
        title: "",
        description: "",
        price: "",
        quantity: "",
        category: "",
        image: "",
    }

    const [inputForm, setInputForm] = useState(innitialState);

    const [error, seterror] = useState({});

    const handalchanged = (e) => {
        const { name, value } = e.target;
        setInputForm({ ...inputForm, [name]: value })
    }
    
    const validate = () => {
        let error = {};
        if (inputForm.title === "") {
            error.title = "Title is required";
        } else if (inputForm.title.length < 5) {
            error.title = "Title must be at least 5 characters";
        }

        if (inputForm.description === "") {
            error.description = "Description is required";
        }
        if (inputForm.price === "") {
            error.price = "Price is required";
        }
        if (inputForm.quantity === "") {
            error.quantity = "Quantity is required";
        }
        if (inputForm.category === "") {
            error.category = "Category is required";
        }
        if (inputForm.image === "") {
            error.image = "Image is required";
        }

        console.log(error);
        seterror(error);

        return Object.keys(error).length !== 0;
    }

    const handalsubmit = (e) => {
        e.preventDefault();

        if (!validate()) {
            inputForm.id = Math.floor(Math.random() * 100);
            let olddata = getStorageData();
            olddata.push(inputForm);
            setStorageData(olddata);
            setInputForm(innitialState);
            navigate("/");
        }
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}> Add Product</h1>
            <Container >
                <Form onSubmit={handalsubmit}>
                    
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Title
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='title' value={inputForm.title} onChange={handalchanged} placeholder="Title" />
                            {error.title ? <span>{error.title}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Description
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='description' value={inputForm.description} onChange={handalchanged} placeholder="Description" />
                            {error.description ? <span>{error.description}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Price
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" name='price' value={inputForm.price} onChange={handalchanged} placeholder="price" />
                            {error.price ? <span>{error.price}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Quantity
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" name='quantity' value={inputForm.quantity} onChange={handalchanged} placeholder="quantity" />
                            {error.quantity ? <span>{error.quantity}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="6">
                            <Form.Select name='category' value={inputForm.category} onChange={handalchanged} aria-label="Default select example">
                                <option value="">Select Category</option>
                                <option value="Moblie">Moblie</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Fashion">Fashion</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Product img
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='image' value={inputForm.image} onChange={handalchanged} placeholder=" select img url" />
                            {error.image ? <span>{error.image}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Button style={{ textAlign: "center", marginLeft: "20%" }} type='submit' variant="primary">Submit</Button>

                </Form>
            </Container>
        </>
    )
};
export default AddProduct;