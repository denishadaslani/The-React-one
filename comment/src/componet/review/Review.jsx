import { useState } from 'react';
import { getStorageData, setStorageData } from '../../services/storage.data';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import './Review.css';

const Review = () => {
    const [rating, setRating] = useState(0);
    const intialState = {
        name: "",
        email: "",
        review: "",
        description: "",
        img: ""
    };

    const [formdata, setformdata] = useState(intialState);
    const [reviews, setReviews] = useState(getStorageData());
    const [errors, setErrors] = useState({});

    const handalchanged = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    }

    const handelsubmit = (e) => {
        e.preventDefault();
        if (!validatetion()) {
            formdata.id = Math.floor(Math.random() * 100);
            let olddata = getStorageData();
            olddata.push(formdata);
            setStorageData(olddata);
            setReviews(olddata);
            setformdata(intialState);
            setRating(0);
        }

    }

    const handleStarClick = (star) => {
        setRating(star);
        setformdata({ ...formdata, review: star });
    };

    const validatetion = () => {
        let errors = {};
        if (formdata.name == '') {
            errors.name = 'Name is required';
        }
        if (formdata.email == '') {
            errors.email = 'Email is required';
        }
        if (formdata.review == '') {

            errors.review = 'Review is required';
        }
        if (formdata.description == '') {
            errors.description = 'description is required';
        }
        if (formdata.img == '') {
            errors.img = 'img is required';
        }
        console.log(errors);
        setErrors(errors);
        return Object.keys(errors).length !== 0;
    }

    return (
        <>
            <h1 className='text-center py-3'>Review</h1>
            <Container className='py-5 text-center'>
                <Form onSubmit={handelsubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formName">
                        <Form.Label column sm="2">
                            Name  :
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" value={formdata.name} name='name' onChange={handalchanged} placeholder="Name" />
                            {errors.name ? <span>{errors.name}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formEmail">
                        <Form.Label column sm="2">
                            Email  :
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control name='email' value={formdata.email} type="email" onChange={handalchanged} placeholder="Email" />
                            {errors.email ? <span>{errors.email}</span> : ""}
                        </Col>
                    </Form.Group>

                    <br></br>
                    <Form.Group as={Row} className="mb-3" controlId="formReview">
                        <Form.Label column sm="2">Review :</Form.Label>
                        <Col sm="6">
                            {errors.review ? <span>{errors.review}</span> : ""}
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        size={30}
                                        style={{ cursor: 'pointer', marginRight: 10 }}
                                        color={rating >= star ? '#ffc107' : '#e4e5e9'}
                                        onClick={() => handleStarClick(star)}
                                    />
                                ))}
                            </div>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formEmail">
                        <Form.Label column sm="2">
                            description  :
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" value={formdata.description} name='description' onChange={handalchanged} placeholder="description" />
                            {errors.description ? <span>{errors.description}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formEmail">
                        <Form.Label column sm="2">
                            img  :
                        </Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" value={formdata.img} name='img' onChange={handalchanged} placeholder="img url" />
                            {errors.img ? <span>{errors.img}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formEmail">

                        <Col sm="6">
                            <button className='btn btn-primary' style={{ marginLeft: "40%", marginTop: "20px" }} type="submit">Submit</button>
                        </Col>
                    </Form.Group>

                </Form>
            </Container>

            {/* display review  */}
            <Container className='d-flex flex-wrap gap-4 py-5'>
                {reviews.map((v) => (
                    <Card style={{ width: '18rem' }} key={v.id}>
                        <Card.Body>
                            <Card.Img variant="top" src={v.img} />
                            <Card.Title>Name: {v.name}</Card.Title>
                            <Card.Title>
                                Rating: {' '}
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar key={star} color={star <= Number(v.review) ? "#ffc107" : "#e4e5e9"} />
                                ))}
                            </Card.Title>

                            <Card.Text>Email: {v.email}</Card.Text>
                            <Card.Text>description: {v.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </>
    );
}

export default Review;
