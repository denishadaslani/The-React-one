import { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import { getStorageData, setStorageData } from "../../services/storage.data";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router";


const Product = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [sortData, setSortData] = useState("");

    useEffect(() => {
        let data = getStorageData()
        setProducts(data);
    }, []);

    const Deleteproduct = (id) => {
        let data = getStorageData();
        let pos = data.filter((v, i) => v.id != id);
        setProducts(pos);
        setStorageData(pos);
        console.log(id);
    }

    const handelsearch = () => {
        let data = getStorageData();
        let update = data.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase());

        })
        setProducts(update);
        setSearch('');
        console.log(update);
    }

    // const handelasc = () => {
    //     // let data = getStorageData();
    //     let data = [...products];
    //     let update = data.sort((a, b) => {
    //         return a.title.localeCompare(b.title);
    //     })
    //     setProducts(update);
    //     console.log(update);
    // }

    // const handeldesc = () => {
    //     // let data = getStorageData();
    //     let data = [...products];
    //     let update = data.sort((a, b) => {
    //         return b.title.localeCompare(a.title);
    //     })
    //     setProducts(update);
    //     console.log(update);
    // }

    const handelsort = () => {
        let data = [...products];
        let [field, type] = sortData.split(",");
        let updateData;
        if (type == 'asc') {
            if (field == 'price') {
                updateData = data.sort((a, b) => {
                    return a[field] - b[field];
                })
            } else {
                updateData = data.sort((a, b) => {
                    return a[field].localeCompare(b[field]);
                })
            }
        }
        else {
            if (field == 'price') {
                updateData = data.sort((a, b) => {
                    return b[field] - a[field];
                })
            } else {
                updateData = data.sort((a, b) => {
                    return b[field].localeCompare(a[field]);
                })
            }
        }
        setProducts(updateData);
        console.log(updateData);
    }

    const handelclear = () => {
        let data = getStorageData();
        setProducts(data);
        setSearch('');
    }

    const Editproduct = (id) => {
        console.log(id);
        navigate(`/editproduct/${id}`);
    }

    return (
        <>
            <h2 className='text-center'>All Products</h2>
            <input style={{ textAlign: 'center' }} type="text" name="search" onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handelsearch}>Search</button> &nbsp;&nbsp;
            <button onClick={handelclear}>clear</button> &nbsp;&nbsp;

            <select onChange={(e) => setSortData(e.target.value)}>
                <option value=""> Select sorting </option>
                <option value="title,asc">Title - asc</option>
                <option value="title,desc">Title - desc</option>
                <option value="price,asc">price - asc</option>
                <option value="price,desc">price - desc</option>
            </select>
            <button onClick={handelsort}>Soting</button>
            {/* <button onClick={handelasc}>asc</button> &nbsp;&nbsp;
            <button onClick={handeldesc}>desc</button> */}


            <Container className='d-flex flex-wrap gap-4 py-5' >
                {products.map((v, i) => {
                    return (
                        <>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={v.image} />
                                <Card.Body>
                                    <Card.Title>{v.title} || {v.id}</Card.Title>
                                    <Card.Text>
                                        {v.description}
                                    </Card.Text>
                                    <Card.Text>
                                        price :   {v.price}
                                    </Card.Text>
                                    <Card.Text>
                                        category :   {v.category}
                                    </Card.Text>
                                    <Card.Text>
                                        quantity :   {v.quantity}
                                    </Card.Text>

                                    <Button variant="primary" onClick={() => Editproduct(v.id)}>Edit</Button>
                                    <Button variant="danger" onClick={() => Deleteproduct(v.id)}>Delete</Button>
                                </Card.Body>
                            </Card>
                        </>
                    )
                })}

            </Container>
        </>
    );
};

export default Product;
