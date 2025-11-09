import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { getStorageData, setStorageData } from '/src/services/storage.data';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import '../form.css';

const Addmovie = () => {

    const navigate = useNavigate();

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

    const [error, setError] = useState({});
    const HandelChange = (e) => {
        const { name, value } = e.target;
        setinputForm({ ...inputForm, [name]: value });
    }

    const HandelSubmit = (e) => {
        e.preventDefault();
        if (!validate()) {
            inputForm.id = Math.floor(Math.random() * 100);
            let olddata = getStorageData();
            olddata.push(inputForm);
            setStorageData(olddata);
            setinputForm(innitialState);
            navigate('/');
        }
    }

    const validate = () => {
        let error = {};

        if (inputForm.name === '') { error.name = 'Name is required'; }
        if (inputForm.genre === '') { error.genre = 'Genre is required'; }
        if (inputForm.language === '') { error.language = 'Language is required'; }
        if (inputForm.duration === '') { error.duration = 'Duration is required'; }
        if (inputForm.releaseDate === '') { error.releaseDate = 'Release Date is required'; }
        if (inputForm.showTime === '') { error.showTime = 'Show Time is required'; }
        if (inputForm.price === '') { error.price = 'Price is required'; }
        if (inputForm.posterUrl === '') { error.posterUrl = 'Poster Url is required'; }

        console.log(error);
        setError(error);

        return Object.keys(error).length !== 0;
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
                            {error.name ? <span>{error.name}</span> : ""}
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
                            {error.genre ? <span>{error.genre}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Form.Label column sm="2">Language :</Form.Label>
                        <Col sm="6">
                            <Form.Control name='language' value={inputForm.language} onChange={HandelChange} type="text" placeholder="Enter Language" />
                            {error.language ? <span>{error.language}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Form.Label column sm="2">Duration :</Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" value={inputForm.duration} onChange={HandelChange} name='duration' placeholder="e.g. 2h 15m" />
                            {error.duration ? <span>{error.duration}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Form.Label column sm="2">Release Date :</Form.Label>
                        <Col sm="6">
                            <Form.Control name='releaseDate' value={inputForm.releaseDate} onChange={HandelChange} type="date" />
                            {error.releaseDate ? <span>{error.releaseDate}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Form.Label column sm="2">Show Time :</Form.Label>
                        <Col sm="6">
                            <Form.Control name='showTime' value={inputForm.showTime} onChange={HandelChange} type="time" />
                            {error.showTime ? <span>{error.showTime}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Form.Label column sm="2">Ticket Price :</Form.Label>
                        <Col sm="6">
                            <Form.Control type="number" value={inputForm.price} onChange={HandelChange} name='price' placeholder="Enter Price" />
                            {error.price ? <span>{error.price}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Form.Label column sm="2">Poster URL :</Form.Label>
                        <Col sm="6">
                            <Form.Control type="text" value={inputForm.posterUrl} onChange={HandelChange} name='posterUrl' placeholder="Enter Image URL" />
                            {error.posterUrl ? <span>{error.posterUrl}</span> : ""}
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 ms-5">
                        <Col sm={{ span: 6, offset: 2 }}>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
};
export default Addmovie;
