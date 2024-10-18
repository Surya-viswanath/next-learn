import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";




function Menu() {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">MyApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/page2" passHref>
            <Nav.Link>Page 2</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
};

export default Menu;