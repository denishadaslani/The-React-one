import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteProperty } from "../../services/action/propertyAction";
import { useNavigate } from "react-router";
const Home = () => {

    const properties = useSelector(state => state.properties)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handelDelete = (id) => {
        console.log(id);
        dispatch(deleteProperty(id))
    }
      const handleEdit = (id) => {
        navigate(`/edit-property/${id}`);
    }

    return (
        <>
            <h1>Home</h1>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Property Name</th>
                        <th>Availibility</th>
                        <th>Category</th>
                        <th>Facility</th>
                        <th>Area</th>
                        <th>Property Price</th>
                        <th>ContactNo</th>
                        <th>Address</th>
                        <th>Image</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        properties.map(v => (
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.pname}</td>
                                <td>{v.pavablity}</td>
                                <td>{v.category}</td>
                                <td>{v.facility}</td>
                                <td>{v.area}</td>
                                <td>{v.price}</td>
                                <td>{v.contact}</td>
                                <td>{v.address}</td>
                                <td><img src={v.image} height={100} /></td>
                                <td>
                                    <Button className="btn btn-danger" onClick={() => handelDelete(v.id)}>Delete</Button>
                                       &nbsp; || &nbsp;
                                    <Button className="btn btn-primary" onClick={() => handleEdit(v.id)}>Edit</Button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </Table >

        </>
    )
}

export default Home;