import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch } from 'react-redux';
import { getProductAsync, updateProductAsync } from '../../services/action/propertyAction';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import uploadImg from '../../services/file/uploadimg';

const EditProduct = () => {
    const { id } = useParams();


    const { product, isUpdated } = useSelector(state => state.productReducer);
    const { user, error } = useSelector(state => state.authReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialState = {
        id: "",
        pname: "",
        desc: "",
        img: "",
        price: "",
        brand: "",
        category: "",
        gender: "",
        pattern: []
    }

    const [inputForm, setInputForm] = useState(initialState);

    const Handelchange = (e) => {
        const { name, value, type, checked } = e.target
        if (type == 'checkbox') {
            setInputForm((prev) => ({
                ...prev,
                pattern: checked ? [...prev.pattern, value] : prev.pattern.filter(v => v != value)
            }))
        }
        else {
            setInputForm({
                ...inputForm,
                [name]: value
            })
        }
    }

    const Handelsubmit = (e) => {
        e.preventDefault();
        dispatch(updateProductAsync(inputForm));
    }

    const Handelimagechange = async (e) => {
        let imgurl = await uploadImg(e.target.files[0]);
        setInputForm({
            ...inputForm,
            img: `${imgurl}`
        });
    }


    useEffect(() => {
        if (isUpdated) {
            if (inputForm.gender === 'women') {
                navigate('/Women')
            }
            else if (inputForm.gender === 'men') {
                navigate('/Men')
            }
            else if (inputForm.gender === 'kids') {
                navigate('/Kids')
            }
        }
    }, [isUpdated])

    useEffect(() => {
        if (product) {
            setInputForm(product)
        }
    }, [product])

    useEffect(() => {
        dispatch(getProductAsync(Number(id)));
    }, [id]);

    return (
        <>
            <h1 className='text-center my-5'>Edit Product</h1>
            <Container className='mt-5'>
                <Form onSubmit={Handelsubmit}>
                    <Form.Group as={Row} className="mb-3 text-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Product Name :
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='pname' value={inputForm.pname}
                                onChange={Handelchange} placeholder="Enter Product Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 text-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Product Description :
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='desc' onChange={Handelchange} value={inputForm.desc} placeholder="Enter Product Description" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="img">
                        <Form.Label column sm="2">Product Image :</Form.Label>
                        <Col sm="6">
                            <Form.Control
                                type="file"
                                name='img'
                                onChange={Handelimagechange}
                            />

                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 text-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Product Brand :
                        </Form.Label>
                        <Col sm="6">
                            <Form.Select name='brand' value={inputForm.brand} onChange={Handelchange} aria-label="Default select example">
                                <option value={""}>select brand</option>
                                {['Nike', 'Adidas', 'Puma', 'Reebok'].map((v, i) => <option key={i} value={v}>{v}</option>)}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 text-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Category Type:
                        </Form.Label>
                        <Col sm="6">
                            <Form.Select name='category' value={inputForm.category} onChange={Handelchange} aria-label="Default select example">
                                <option value={""}>select category</option>
                                {['Blazers', 'Cargos', 'Jackets', 'Jeans', 'Hoodies'].map((v, i) => <option key={i} value={v}>{v}</option>)}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 text-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Product Price :
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='price' onChange={Handelchange} value={inputForm.price} placeholder="Enter Product Price" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 text-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Pattern Type:
                        </Form.Label>
                        <Col sm="1">
                            {
                                ['Solid', 'Checkered', 'Striped', 'Printed'].map((v, i) => <Form.Check name='pattern' onChange={Handelchange} key={i} type={"checkbox"} value={v} label={v} checked={inputForm.pattern.includes(v)} />)
                            }
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 " controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Product for :
                        </Form.Label>
                        <Col sm="6">
                            <Form.Check
                                type={"radio"} value="men" onChange={Handelchange} name='gender' label="men"
                                checked={inputForm.gender === 'men'}

                            />
                            <Form.Check
                                type={"radio"} value="women" onChange={Handelchange} name='gender' label="women"
                                checked={inputForm.gender === 'women'}
                            />
                            <Form.Check
                                type={"radio"} value="kids" onChange={Handelchange} name='gender' label="kids"
                                checked={inputForm.gender === 'kids'}
                            />
                        </Col>
                    </Form.Group>

                    <Button variant="success" className='my-2' style={{ marginLeft: '25%' }} type="submit">Update Product</Button>

                </Form>
            </Container>
        </>
    )
}

export default EditProduct


