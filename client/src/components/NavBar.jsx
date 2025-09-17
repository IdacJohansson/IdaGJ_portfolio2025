import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Navbar expand="sm">
      <Container className="container" style={{ maxWidth: "600px" }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="custom-link" href="/">
              Ida
            </Nav.Link>
            <Nav.Link className="custom-link" href="/experience">
              Experience
            </Nav.Link>
            <Nav.Link className="custom-link" href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className="custom-link" href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link
              className="custom-link"
              href="https://github.com/IdacJohansson"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
