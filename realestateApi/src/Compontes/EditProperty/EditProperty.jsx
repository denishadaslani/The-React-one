import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router";
import { updateProperty } from "../../services/action/propertyAction";
import { getProperty } from "../../services/action/propertyAction";

const EditProperty = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {property} = useSelector(state => state)
    console.log("property: ", property);
    const navigate = useNavigate();
    const intialState = {
        id: "",
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

    const [inputForm, setInputForm] = useState(intialState);

    const handleChanged = (e) => {
        const { name, value, type, checked } = e.target;
        if (type == 'checkbox') {
            setInputForm((prev) => ({
                ...prev,
                facility: checked ? [...prev.facility, value] : prev.facility.filter(v => v != value)
            }))
        } else {
            setInputForm({
                ...inputForm,
                [name]: value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProperty(inputForm));
        navigate("/");
    }

    useEffect(()=> {
        if(property){
            setInputForm(property);
        }
    }, [property])

    
    useEffect(() => {
        dispatch(getProperty(id));
    }, [id]);


    return (
        <>
            <Container>
                <h2>Edit Property Form</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Name
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="pname" value={inputForm.pname} onChange={handleChanged} placeholder="Enter Propert name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Availability
                        </Form.Label>
                        <Col sm="10">
                            <Form.Check type="radio" name="pavablity" value={"buy"} label="buy" onChange={handleChanged} checked={inputForm.pavablity == 'buy'} />
                            <Form.Check type="radio" name="pavablity" value={"rent"} label="rent" onChange={handleChanged} checked={inputForm.pavablity == 'rent'} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Category
                        </Form.Label>
                        <Col sm="10">
                              <Form.Select name='category' onChange={handleChanged} aria-label="Default select example">
                                <option value={""}>select category</option>
                                {['Aparment', 'Villa', 'Office Space', 'Land'].map((v, i) => <option key={i} selected={inputForm.category == v} value={v}>{v}</option>)}
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Image
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="image" value={inputForm.image} onChange={handleChanged} placeholder="Enter Property Image URL" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Facility
                        </Form.Label>
                        <Col className="d-flex gap-3" sm="10">
                            {
                                ['Garden', 'CCTV', 'Parking', 'Cafe Area', 'Intercom'].map(ele => (
                                    <Form.Check type="checkbox" name="facility" onChange={handleChanged} value={ele} label={ele} checked={inputForm.facility.includes(ele)} />
                                ))
                            }
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Area
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="area" value={inputForm.area} onChange={handleChanged} placeholder="Enter Property Area" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Price
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" name="price" value={inputForm.price} onChange={handleChanged} placeholder="Enter Property Price" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Contact No
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number" name= "contact" value={inputForm.contact} onChange={handleChanged} placeholder="Enter ContactNo" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Property Address
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" name="address" value={inputForm.address} onChange={handleChanged} placeholder="Enter Property Address" />
                        </Col>
                    </Form.Group>
                    <Button type="submit">Update Property</Button>
                </Form>

            </Container>
        </>
    )
};

export default EditProperty;

// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/esm/Container';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addNewProperty } from '../../services/action/propertyAction';

// const EditProperty = () => {

  
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const { property } = useSelector(state => state)
//     console.log("property: ", property);
//     const navigate = useNavigate();

//     const initialState = {
//         pname: "",
//         pavablity: "",
//         category: "",
//         image: "",
//         facility: [],
//         area: "",
//         price: "",
//         contact: "",
//         address: ""
//     }

//     const [inputform, setinputform] = useState(initialState);


//     const Handelchange = (e) => {
//         const { name, value, type, checked } = e.target;
//         if (type == 'checkbox') {
//             setinputform((prev) => ({
//                 ...prev,
//                 facility: checked ? [...prev.facility, value] : prev.facility.filter(v => v != value)
//             }))
//         } else {
//             setinputform({
//                 ...inputform,
//                 [name]: value
//             })
//         }
//     }


//     const Handelsubmit = (e) => {
//         e.preventDefault();
//         const newData = { ...inputform, id: Math.floor(Math.random() * 100) };
//         dispatch(addNewProperty(newData));
//         navigate("/");
//         console.log(newData);
//     }

//     return (
//         <>
//             <h1 style={{ textAlign: 'center' }}>Add Property</h1>
//             <Container>
//                 <Form onSubmit={Handelsubmit}>
//                     <Form.Group as={Row} className="mb-3 pt-5 ms-5 justify-content-center" controlId="formPlaintextPassword">
//                         <Form.Label column sm="2">
//                             Property Name :
//                         </Form.Label>
//                         <Col sm="6">
//                             <Form.Control type="text" name='pname' value={inputform.pname} onChange={Handelchange} placeholder="Enter Property Name" />
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} className="mb-3  ms-5 justify-content-center" controlId="formPlaintextPassword">
//                         <Form.Label column sm="2">
//                             Property Avablity:
//                         </Form.Label>
//                         <Col sm="6">
//                             <Form.Check
//                                 type={"radio"} value="rent" onChange={Handelchange} name='pavablity' label="rent"
//                             />
//                             <Form.Check
//                                 type={"radio"} value="buy" onChange={Handelchange} name='pavablity' label="buy"
//                             />
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} className="mb-3  ms-5 justify-content-center" controlId="formPlaintextPassword">
//                         <Form.Label column sm="2">
//                             Property Category:
//                         </Form.Label>
//                         <Col sm="6">
//                             <Form.Select name='category' onChange={Handelchange} aria-label="Default select example">
//                                 <option value={""}>select category</option>
//                                 {['Aparment', 'Villa', 'Office Space', 'Land'].map((v, i) => <option key={i} value={v}>{v}</option>)}
//                             </Form.Select>
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} className="mb-3 ms-5 justify-content-center" controlId="formPlaintextPassword">
//                         <Form.Label column sm="2">
//                             Property image :
//                         </Form.Label>
//                         <Col sm="6">
//                             <Form.Control type="text" value={inputform.image} onChange={Handelchange} name='image' placeholder="Enter Property image url" />
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} className="mb-3  ms-5 justify-content-center" controlId="formPlaintextPassword">
//                         <Form.Label column sm="2">
//                             Property Facility :
//                         </Form.Label>
//                         <Col sm="6">
//                             {
//                                 ['Garden', 'CCTV', 'Cafe', 'Gym'].map((v, i) =>
//                                     <Form.Check key={i} type={"checkbox"} name='facility' onChange={Handelchange} label={v} value={v} />)
//                             }
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} className="mb-3 ms-5 justify-content-center" controlId="formPlaintextPassword">
//                         <Form.Label column sm="2">
//                             Property Area :
//                         </Form.Label>
//                         <Col sm="6">
//                             <Form.Control type="text" value={inputform.area} onChange={Handelchange} name='area' placeholder="Enter The Property Area" />
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} className="mb-3 ms-5 justify-content-center" controlId="formPlaintextPassword">
//                         <Form.Label column sm="2">
//                             Property Price :
//                         </Form.Label>
//                         <Col sm="6">
//                             <Form.Control type="number" value={inputform.price} onChange={Handelchange} name='price' placeholder="Enter Property Price" />
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} className="mb-3 ms-5 justify-content-center" controlId="formPlaintextPassword">
//                         <Form.Label column sm="2">
//                             Contact No:
//                         </Form.Label>
//                         <Col sm="6">
//                             <Form.Control type="number" value={inputform.contact} onChange={Handelchange} name='contact' placeholder="Enter Contact No" />
//                         </Col>
//                     </Form.Group>

//                     <Form.Group as={Row} className="mb-3 ms-5 justify-content-center" controlId="formPlaintextPassword">
//                         <Form.Label column sm="2">
//                             Property Address :
//                         </Form.Label>
//                         <Col sm="6">
//                             <Form.Control type="address" value={inputform.address} onChange={Handelchange} name='address' placeholder="Enter Property Address" />
//                         </Col>
//                     </Form.Group>

//                     <Button type="submit" className='btn btn-primary ms-5 my-5'>update property</Button>

//                 </Form>
//             </Container>
//         </>
//     )
// }
// export default EditProperty