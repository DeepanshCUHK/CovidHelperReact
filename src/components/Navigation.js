import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
function Navigation() {
   
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">COVID-Helper</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Plasma Donors</Nav.Link>
                <Nav.Link as={Link} to="/page2">Oxygen Vendors</Nav.Link>
            </Nav>
        </Navbar>
     
    );
  }
  
  export default Navigation;