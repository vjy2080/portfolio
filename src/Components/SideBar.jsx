import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './Footer';
import { Image } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar className="header" bg="dark" data-bs-theme="dark" sticky='top'>
      <Container className='my-3 d-flex flex-column justify-content-between min-vh-100 py-3'>
      <Image className='logo' src="./Logo.png" width={150} height={150} />
        <Navbar.Brand href="/" className='text-warning'>Vijay's Portfolio</Navbar.Brand>
        <Nav className="m-auto d-flex flex-column">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/skills">Skills</Nav.Link>
          <Nav.Link href="/project">Projects</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="https://github.com/vjy2080" target='_blank' className='text-white'><i className="bi bi-github"></i></Nav.Link>
          <Nav.Link href="https://wa.link/kha7oq" target='_blank'><i className="bi bi-whatsapp"></i></Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/vijay-prajapati-58b95b66" target='_blank'><i className="bi bi-linkedin"></i></Nav.Link>
          <Nav.Link href="mailto: vjy2080@gmail.com" target='_blank'><i className="bi bi-envelope-at"></i></Nav.Link>
        </Nav>
      <Footer/>
      </Container>
    </Navbar>
  );
}
