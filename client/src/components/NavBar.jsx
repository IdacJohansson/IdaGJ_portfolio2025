import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import ImgIda from "../assets/images/ida.jpg";

const NavBar = () => {
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
              <Image
                src={ImgIda}
                style={{ width: "40px", height: "40px", border: "solid" }}
                roundedCircle
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-body">
            <Nav className="link-position mx-auto">
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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
