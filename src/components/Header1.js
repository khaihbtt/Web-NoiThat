import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.scss';

const HeaderMe = (props) => {
  return (
    <>
      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav className="me-auto1">
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
              <Nav.Link href="#Press">Press</Nav.Link>
              <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#Impression">Impression</Nav.Link>
            </Nav>

            <Nav className="me-auto2">
              <Nav.Link href="#Home"><a> </a>NESTSPACE</Nav.Link>
            </Nav>
            
          </Nav>
        </Container>
        <Container>
          <Nav className="me-auto3">
            <Nav.Link href="#pricing"><i className="fa-brands fa-facebook"></i></Nav.Link>
            <Nav.Link href="#Impression"><i className="fa-brands fa-instagram"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderMe;