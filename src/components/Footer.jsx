import React from 'react'
import {Navbar} from 'react-bootstrap'

const year = new Date().getFullYear() 

const Footer = () => {
  return (
    <>
    <Navbar bg="dark" className="footer">
    <Navbar.Brand href="#home">@copyright {year}</Navbar.Brand>
  </Navbar>
    </>
  )
}

export default Footer
