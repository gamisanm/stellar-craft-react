import React, { Component } from 'react'
import { Button, Container, Dropdown, Nav, Navbar, DropdownButton } from 'react-bootstrap'
import logo from './logo.jpg'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                <Container >
                    <Navbar.Brand href="/" >
                        <img
                            src={logo}
                            height="50"
                            width="50"
                            className="d-inline-block algin-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"> Головна </Nav.Link>
                            <DropdownButton id="dropdown-item-button" title="Сервера">
                                <Dropdown.ItemText className="bg-secondary text-light" >Версія 1.16.5</Dropdown.ItemText>
                                <Dropdown.Item as={Link} to="/VanillaPage" >Vanilla+</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/HiTechPage" >HI-TECH</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/MagicPage" >Magic</Dropdown.Item>
                                <Dropdown.ItemText className="bg-secondary text-light" >Версія 1.12.2</Dropdown.ItemText>
                                <Dropdown.Item as={Link} to="/TopVanillaPage"  >TopVanilla+</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/UltraTechPage"  >UltraTech</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/MagicRPGPage" >MagicRPG</Dropdown.Item>
                            </DropdownButton>
                            <Nav.Link href="/about"> Про нас </Nav.Link>
                            <Nav.Link href="/info_guid"> Корисна інформація </Nav.Link>
                        </Nav>
                        <Button variant="primary" size="lg" >ПОЧАТИ ГРАТИ!</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
