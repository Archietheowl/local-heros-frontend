import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({ user, handleSignOut }) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                        <Nav.Link href="/signin">Sign In</Nav.Link>
                        <Nav.Link href="/jobs">See Jobs</Nav.Link>
                        <Nav.Link href="/jobs/new">Create a Job</Nav.Link>
                        <Nav.Link href="/helpers">See helpers</Nav.Link>
                        <Nav.Link href="/helpers/new">Become a helper</Nav.Link>
                        <Nav.Link href="" onClick={handleSignOut}>Sign Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;