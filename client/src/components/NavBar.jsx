import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <Navbar expand="sm" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          style={{ width: "250px" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <a
                href="https://www.facebook.com/profile.php?id=735198102"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://github.com/IdacJohansson"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github p-2"></i>
              </a>
              <a
                href="https://se.linkedin.com/in/ida-grufman-johansson-45ab60b6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-body">
            <Nav className="link-position mx-auto">
              {location.pathname !== "/" && (
                <Nav.Link as={Link} to="/" className="custom-link">
                  IDA
                </Nav.Link>
              )}
              <Nav.Link className="custom-link" href="/experience">
                EXPERIENCE
              </Nav.Link>
              <Nav.Link className="custom-link" href="/projects">
                PRPJECTS
              </Nav.Link>
              <Nav.Link className="custom-link" href="/contact">
                CONTACT
              </Nav.Link>
              <Nav.Link
                className="custom-link"
                href="https://github.com/IdacJohansson"
                rel="noopener noreferrer"
                target="_blank"
              >
                GITHUB
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
