import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getStorageData, setStorageData } from "../../services/storage.data";
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
    const [Movie, setMovie] = useState([]);
    const [search, setSearch] = useState("");
    const [sortData, setSortData] = useState("");
    const [genreFilter, setGenreFilter] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        let data = getStorageData();
        setMovie(data);
    }, []);

    const EditMovie = (id) => {
        navigate(`/editmovie/${id}`);
    };

    const DeleteMovie = (id) => {
        let data = getStorageData();
        data = data.filter((v) => v.id !== id);
        setStorageData(data);
        setMovie(data);
    };

    const handleSearch = () => {
        let data = getStorageData();
        let update = data.filter((movie) =>
            movie.name.toLowerCase().includes(search.toLowerCase())
        );
        setMovie(update);
        setSearch("");
    };

    const handleClear = () => {
        let data = getStorageData();
        setMovie(data);
        setSearch("");
        setSortData("");
        setGenreFilter("");
    };

    const handleSort = () => {
        let data = [...Movie];
        if (!sortData) return;
        let [field, type] = sortData.split(",");
        let updateData;

        if (type === "asc") {
            if (field === "price") {
                updateData = data.sort((a, b) => a[field] - b[field]);
            } else {
                updateData = data.sort((a, b) =>
                    a[field].toString().localeCompare(b[field].toString())
                );
            }
        } else {
            if (field === "price") {
                updateData = data.sort((a, b) => b[field] - a[field]);
            } else {
                updateData = data.sort((a, b) =>
                    b[field].toString().localeCompare(a[field].toString())
                );
            }
        }
        setMovie(updateData);
    };

    const handleGenreFilter = (e) => {
        let genre = e.target.value;
        setGenreFilter(genre);
        let data = getStorageData();

        if (genre) {
            let update = data.filter((movie) =>
                movie.genre.toLowerCase() === genre.toLowerCase()
            );
            setMovie(update);
        } else {
            setMovie(data);
        }
    };

    return (
        <div className="home-wrapper">
          

            <div className="controls">
                <input
                    className="search-input"
                    type="text"
                    value={search}
                    placeholder="Search by name..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn" onClick={handleSearch}>Search</button>
                <button className="btn clear" onClick={handleClear}>Clear</button>

                <select
                    className="dropdown"
                    value={sortData}
                    onChange={(e) => setSortData(e.target.value)}
                >



                    <option value="">Sort By</option>
                    <option value="name,asc">Name - asc</option>
                    <option value="name,desc">Name - desc</option>
                    <option value="price,asc">Price - asc</option>
                    <option value="price,desc">Price - desc</option>
                    <option value="releaseDate,asc">Release Date - asc</option>
                    <option value="releaseDate,desc">Release Date - desc</option>
                </select>
                <button className="btn" onClick={handleSort}>Sort</button>

                <select
                    className="dropdown"
                    value={genreFilter}
                    onChange={handleGenreFilter}
                >
                    <option value="">Filter by Genre</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror">Horror</option>
                </select>
            </div>

            <Container className="movie-container">

                {Movie.map((v, i) => (
                    <Card className="movie-card" key={i}>

                        <Card.Img className="poster" variant="top" src={v.posterUrl} />
                        <Card.Body>
                            <Card.Title className="movie-title">{v.name}</Card.Title>
                            <Card.Text><strong>Genre:</strong> {v.genre}</Card.Text>
                            <Card.Text><strong>Duration:</strong> {v.duration}</Card.Text>
                            <Card.Text><strong>Language:</strong> {v.language}</Card.Text>
                            <Card.Text><strong>Release:</strong> {v.releaseDate}</Card.Text>
                            <Card.Text><strong>Show Time:</strong> {v.showTime}</Card.Text>
                            <Card.Text><strong>Price:</strong> ₹{v.price}</Card.Text>

                            <div className="action-buttons">       <Button
                                variant="primary"
                                onClick={() => EditMovie(v.id)}
                            >
                                Edit
                            </Button>
                                <Button
                                    variant="danger"
                                    onClick={() => DeleteMovie(v.id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </div>
    );
};

export default Home;
