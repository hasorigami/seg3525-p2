import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function StoreNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Home</Navbar.Brand>
        </LinkContainer>
    
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/about'>
              <Nav.Link>About us</Nav.Link> 
            </LinkContainer>
            <NavDropdown title="Shop">

              <LinkContainer to='/instruments'>
                <NavDropdown.Item>Instruments</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='/books'>
                <NavDropdown.Item>Books</NavDropdown.Item>
              </LinkContainer>
  
            </NavDropdown>

          </Nav>
          
          <Nav>
            <Nav.Link className='d-flex'>Cart</Nav.Link>
            <Button className='d-flex'>Log in</Button>
          </Nav>
        </Navbar.Collapse>


      </Container>
    </Navbar>
  );
}

export default StoreNavbar;