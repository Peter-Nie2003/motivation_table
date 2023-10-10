import React from 'react';
import "../../utilities.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary NavBar-container">
            <Container>
                <Navbar.Brand className="NavBar-title">Motivation-table</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBar;