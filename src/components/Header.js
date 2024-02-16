import React, { useState } from 'react';
import { Button, Container, Dropdown, Nav, Navbar, DropdownButton, Modal } from 'react-bootstrap';
import logo from './logo.jpg';
import { Link } from 'react-router-dom';

export default function Header() {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

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
                    <Button variant="primary" size="lg" onClick={handleShowModal}>Почати гру!</Button>
                </Navbar.Collapse>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="w-100 text-center">
                        Як почати гру на StellarCraft?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <p>Для гри на серверах Вам необхідно зареєструватися.</p>
                        <Button variant="primary" onClick={() => { window.location.href = 'http://195.201.70.90:9274/StellarCraft.exe' }}>
                            Реєстрація аккаунта
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Body>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-12">
                                <div className="text-center">
                                    <p>Також для гри на серверах Вам необхідно завантажити наш лаунчер</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-6">
                                <Button variant="success" onClick={() => { window.location.href = 'http://195.201.70.90:9274/StellarCraft.jar' }}>
                                    Завантажити файл JAR
                                </Button>
                            </div>
                            <div className="col-sm-6">
                                <Button variant="success" onClick={() => { window.location.href = 'http://195.201.70.90:9274/StellarCraft.exe' }}>
                                    Завантажити файл EXE
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


        </Navbar>
    );
}
