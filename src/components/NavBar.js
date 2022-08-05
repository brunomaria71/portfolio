import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function MenuBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Maria's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/who">Who</Nav.Link>
            <Nav.Link href="/work">Work</Nav.Link>
            <NavDropdown title="Socials" id="collasible-nav-dropdown">
              <NavDropdown.Item
                href="https://www.linkedin.com/in/mariabruno71/"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://github.com/brunomaria71"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://medium.com/@brunomaria71"
                target="_blank"
                rel="noreferrer noopener"
              >
                Medium
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/codepink">Code:Pink</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
