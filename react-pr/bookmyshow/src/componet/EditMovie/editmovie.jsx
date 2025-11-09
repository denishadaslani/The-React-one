import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { getStorageData, setStorageData } from '/src/services/storage.data';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import '../form.css';

const EditMovie = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    
    const innitialState = {
        name: '',
        genre: '',
        language: '',
        duration: '',
        releaseDate: '',
        showTime: '',
        price: '',
        posterUrl: ''
    }

    const [inputForm, setinputForm] = useState(innitialState);


    const HandelChange = (e) => {
        const { name, value } = e.target;
        setinputForm({ ...inputForm, [name]: value });
    }

    
    useEffect(() => {
        let data = getStorageData();
        let recored = data.find((v, i) => v.id == id);
        setinputForm(recored);
    }, [id]);

     const HandelSubmit = (e) => {
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
        setinputForm(innitialState);
        navigate("/");
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}> Add Movie</h1>
            <Container>
                <Form className="pt-5" onSubmit={HandelSubmit}>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Form.Label column sm="2">Movie Name :</Form.Label>
                        <Col sm="6">
                            <Form.Control name='name' value={inputForm.name} onChange={HandelChange} type="text" placeholder="Enter Movie Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Form.Label column sm="2">Genre :</Form.Label>
                        <Col sm="6">
                            <Form.Select name='genre' value={inputForm.genre} onChange={HandelChange}>
                                <option>Select Genre</option>
                                <option>Action</option>
                                <option>Comedy</option>
                                <option>Drama</option>
                                <option>Horror</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Form.Label column sm="2">Language :</Form.Label>
                        <Col sm="6">
                            <Form.Control name='language' value={inputForm.language} onChange={HandelChange} type="text" placeholder="Enter Language" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Form.Label column sm="2">Duration :</Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" value={inputForm.duration} onChange={HandelChange} name='duration' placeholder="e.g. 2h 15m" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Form.Label column sm="2">Release Date :</Form.Label>
                        <Col sm="6">
                            <Form.Control name='releaseDate' value={inputForm.releaseDate} onChange={HandelChange} type="date" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Form.Label column sm="2">Show Time :</Form.Label>
                        <Col sm="6">
                            <Form.Control name='showTime' value={inputForm.showTime} onChange={HandelChange} type="time" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Form.Label column sm="2">Ticket Price :</Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" value={inputForm.price} onChange={HandelChange} name='price' placeholder="Enter Price" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Form.Label column sm="2">Poster URL :</Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" value={inputForm.posterUrl} onChange={HandelChange} name='posterUrl' placeholder="Enter Image URL" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Col sm={{ span: 6, offset: 2 }}>
                            <Button type="submit">Add Movie</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
};
export default EditMovie;

