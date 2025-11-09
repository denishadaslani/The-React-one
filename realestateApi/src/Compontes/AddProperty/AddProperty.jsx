import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNewProperty } from '../../services/action/propertyAction';

const AddProperty = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialState = {
        pname: "",
        pavablity: "",
        category: "",
        image: "",
        facility: [],
        area: "",
        price: "",
        contact: "",
        address: ""
    }

    const [inputform, setinputform] = useState(initialState);


    const Handelchange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type == 'checkbox') {
            setinputform((prev) => ({
                ...prev,
                facility: checked ? [...prev.facility, value] : prev.facility.filter(v => v != value)
            }))
        } else {
            setinputform({
                ...inputform,
                [name]: value
            })
        }
    }


    const Handelsubmit = (e) => {
        e.preventDefault();
        const newData = { ...inputform, id: Math.floor(Math.random() * 100) };
        dispatch(addNewProperty(newData));   
        navigate("/");
        console.log(newData);  
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Add Property</h1>
            <Container>
                <Form onSubmit={Handelsubmit}>
                    <Form.Group as={Row} className="mb-3 pt-5 ms-5 justify-content-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Property Name :
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" name='pname' value={inputform.pname} onChange={Handelchange} placeholder="Enter Property Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3  ms-5 justify-content-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Property Avablity:
                        </Form.Label>
                        <Col sm="6">
                            <Form.Check
                                type={"radio"} value="rent" onChange={Handelchange} name='pavablity' label="rent"
                            />
                            <Form.Check
                                type={"radio"} value="buy" onChange={Handelchange} name='pavablity' label="buy"
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3  ms-5 justify-content-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Property Category:
                        </Form.Label>
                        <Col sm="6">
                            <Form.Select name='category' onChange={Handelchange} aria-label="Default select example">
                                <option value={""}>select category</option>
                                {['Aparment', 'Villa', 'Office Space', 'Land'].map((v, i) => <option key={i} value={v}>{v}</option>)}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5 justify-content-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Property image :
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" value={inputform.image} onChange={Handelchange} name='image' placeholder="Enter Property image url" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3  ms-5 justify-content-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Property Facility :
                        </Form.Label>
                        <Col sm="6">
                            {
                                ['Garden', 'CCTV', 'Cafe', 'Gym'].map((v, i) =>
                                    <Form.Check key={i} type={"checkbox"} name='facility' onChange={Handelchange} label={v} value={v} />)
                            }
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5 justify-content-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Property Area :
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" value={inputform.area} onChange={Handelchange} name='area' placeholder="Enter The Property Area" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5 justify-content-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Property Price :
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" value={inputform.price} onChange={Handelchange} name='price' placeholder="Enter Property Price" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5 justify-content-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Contact No:
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" value={inputform.contact} onChange={Handelchange} name='contact' placeholder="Enter Contact No" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5 justify-content-center" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Property Address :
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="address" value={inputform.address} onChange={Handelchange} name='address' placeholder="Enter Property Address" />
                        </Col>
                    </Form.Group>

                    <Button type="submit" className='btn btn-primary ms-5 my-5'>Add property</Button>

                </Form>
            </Container>
        </>
    )
}
export default AddProperty