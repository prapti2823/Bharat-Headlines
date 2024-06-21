import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { CardImg } from 'react-bootstrap';
import BharatHeadlines from '../assets/bharatheadlines.png'

const UpperNavbar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-gray-300">
                <Container fluid>
                    <div className='pr-3 max-md:pr-0'>
                        <CardImg src={BharatHeadlines} className='w-20 h-20 rounded-2xl !rounded-full max-sm:w-10 max-sm:h-10' />
                    </div>
                    <Navbar.Brand href="/" className='text-black'>Bharat Headlines</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/" className='text-black'>Home</Nav.Link>
                            <Nav.Link href="/business" className='text-black'>Business</Nav.Link>
                            <Nav.Link href="/entertainment" className='text-black'>Entertainment</Nav.Link>
                            <Nav.Link href="/technology" className='text-black'>Technology</Nav.Link>
                            <Nav.Link href="/sports" className='text-black'>Sports</Nav.Link>
                            <Nav.Link href="/science" className='text-black'>Science</Nav.Link>
                            <Nav.Link href="/health" className='text-black'>Health</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default UpperNavbar;
