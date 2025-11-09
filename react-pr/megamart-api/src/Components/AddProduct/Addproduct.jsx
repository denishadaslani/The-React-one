import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { addNewProductAsync } from '../../services/action/propertyAction';
import { useNavigate } from 'react-router';

const Addproduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isError, isCreated } = useSelector(state => state)

    const initialState = {
        id: "",
        pname: "",
        desc: "",
        img: "",
        price: "",
        brand: "",
        category: "",
        pattern: []
    }

    const [inputForm, setInputForm] = useState(initialState);
    const [error, setError] = useState({});

    const Handelchange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setInputForm((prev) => ({
                ...prev,
                pattern: checked
                    ? [...prev.pattern, value]
                    : prev.pattern.filter(v => v !== value)
            }));
        } else {
            setInputForm({
                ...inputForm,
                [name]: value
            });
        }
    }

    const validate = () => {
        let err = {};
        if (!inputForm.pname.trim()) err.pname = 'Product Name is required';
        if (!inputForm.desc.trim()) err.desc = 'Product Description is required';
        if (!inputForm.img.trim()) err.img = 'Product Image URL is required';
        if (!inputForm.price.trim()) err.price = 'Product Price is required';
        if (!inputForm.brand.trim()) err.brand = 'Product Brand is required';
        if (!inputForm.category.trim()) err.category = 'Product Category is required';
        if (inputForm.pattern.length === 0) err.pattern = 'Product Pattern is required';

        setError(err);
        return Object.keys(err).length !== 0;
    }

    const Handelsubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            const newdata = { ...inputForm, id: String(Math.floor(Math.random() * 100) )};
            dispatch(addNewProductAsync(newdata));
        }
    }
    
    useEffect(() => {
        if (isCreated) {
            navigate("/Men")
        }
    }, [isCreated])

    return (
        <Container className='mt-5'>
            <h2>Add Product</h2>
            {isError ? <p>{isError}</p> : ""}
            <Form onSubmit={Handelsubmit}>
                <Form.Group as={Row} className="mb-3" controlId="pname">
                    <Form.Label column sm="2">Product Name :</Form.Label>
                    <Col sm="6">
                        <Form.Control
                            type="text"
                            name='pname'
                            value={inputForm.pname}
                            onChange={Handelchange}
                            placeholder="Enter Product Name"
                        />
                        {error.pname && <div className="text-danger mt-1">{error.pname}</div>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="desc">
                    <Form.Label column sm="2">Product Description :</Form.Label>
                    <Col sm="6">
                        <Form.Control
                            type="text"
                            name='desc'
                            value={inputForm.desc}
                            onChange={Handelchange}
                            placeholder="Enter Product Description"
                        />
                        {error.desc && <div className="text-danger mt-1">{error.desc}</div>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="img">
                    <Form.Label column sm="2">Product Image :</Form.Label>
                    <Col sm="6">
                        <Form.Control
                            type="text"
                            name='img'
                            value={inputForm.img}
                            onChange={Handelchange}
                            placeholder="Enter Product Image URL"
                        />
                        {error.img && <div className="text-danger mt-1">{error.img}</div>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="brand">
                    <Form.Label column sm="2">Product Brand :</Form.Label>
                    <Col sm="6">
                        <Form.Select
                            name='brand'
                            value={inputForm.brand}
                            onChange={Handelchange}
                        >
                            <option value="">Select Brand</option>
                            {['Nike', 'Adidas', 'Puma', 'Reebok'].map((v, i) => (
                                <option key={i} value={v}>{v}</option>
                            ))}
                        </Form.Select>
                        {error.brand && <div className="text-danger mt-1">{error.brand}</div>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="category">
                    <Form.Label column sm="2">Category Type :</Form.Label>
                    <Col sm="6">
                        <Form.Select
                            name='category'
                            value={inputForm.category}
                            onChange={Handelchange}
                        >
                            <option value="">Select Category</option>
                            {['Blazers', 'Cargos', 'Jackets', 'Jeans', 'Hoodies'].map((v, i) => (
                                <option key={i} value={v}>{v}</option>
                            ))}
                        </Form.Select>
                        {error.category && <div className="text-danger mt-1">{error.category}</div>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="price">
                    <Form.Label column sm="2">Product Price :</Form.Label>
                    <Col sm="6">
                        <Form.Control
                            type="text"
                            name='price'
                            value={inputForm.price}
                            onChange={Handelchange}
                            placeholder="Enter Product Price"
                        />
                        {error.price && <div className="text-danger mt-1">{error.price}</div>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="pattern">
                    <Form.Label column sm="2">Pattern Type :</Form.Label>
                    <Col sm="6">
                        {['Solid', 'Checkered', 'Striped', 'Printed'].map((v, i) => (
                            <Form.Check
                                name='pattern'
                                onChange={Handelchange}
                                key={i}
                                type="checkbox"
                                value={v}
                                label={v}
                            />
                        ))}
                        {error.pattern && <div className="text-danger mt-1">{error.pattern}</div>}
                    </Col>
                </Form.Group>

                <Button variant="success" type="submit" style={{ marginLeft: '25%' }}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Addproduct;
