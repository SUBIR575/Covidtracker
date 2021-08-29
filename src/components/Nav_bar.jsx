import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'



const Nav_bar = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
    <Container>
  <Navbar.Brand href="#home">SuBiR</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
    <Nav.Item>
              <Nav.Link>
                <Link to='/' className="menu">Home</Link>
              </Nav.Link>
      </Nav.Item>
      <Nav.Item>
              <Nav.Link>
                <Link to='/statewise' className="menu">Statewise</Link>
              </Nav.Link>
      </Nav.Item>
      <Nav.Item>
              <Nav.Link>
                <Link to='/westbengal' className="menu">West Bengal</Link>
              </Nav.Link>
      </Nav.Item>
      <Nav.Item>
              <Nav.Link>
                <Link to='/contact' className="menu">Contact</Link>
              </Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Nav_bar
