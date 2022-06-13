import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/company" className="nav-link">
              Company
            </Link>
            <Link to="/category" className="nav-link">
              Category
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
