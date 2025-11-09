import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'
const Header = () => {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Student</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to={"/AddStudent"} className='btn btn-primary'>Add Student</Link>

                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>    
        </Navbar>
    )
}
export default Header;
