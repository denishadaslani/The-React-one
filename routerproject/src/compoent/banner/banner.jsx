import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';

const Banner = () => {
    const navigate = useNavigate();
    const handel = (name) => {
        // const name = "proudect";
        navigate(`/proudect/${name}`);
    }
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button onClick={()=>handel("proudect")}>Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
};
export default Banner