import React, { useState } from 'react';
import { Button, Carousel, Modal, Accordion } from 'react-bootstrap';

import vanilla_img from '../../assets/vanilla_img.jpg';
import vanilla_img1 from '../../assets/vanilla_img1.jpg';
import vanilla_img2 from '../../assets/vanilla_img2.jpg';

import create_img from '../../assets//mod_img/create.png';
import alexmob_img from '../../assets//mod_img/alexmob.jpeg';
import jeimod_img from '../../assets//mod_img/jeimod.jpeg';
import sereneseason_img from '../../assets//mod_img/sereneseason.png';
import yungs1_img from '../../assets//mod_img/yungs1.png';

function VanillaPage() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>

      <div className="d-flex justify-content-center mt-4 mb-3">
        <h1>Сторінка серверу - Vanilla+ 1.16.5</h1>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="d-flex justify-content-center mt-1 mb-3">
          <h3>Галерея серверу</h3>
        </div>
        <Carousel fade>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Перший слайд</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            <img
              className="d-block"
              src={vanilla_img}
              alt="First slide"
              style={{ width: '800px', height: '400px' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Другий слайд</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            <img
              className="d-block"
              src={vanilla_img1}
              alt="Second slide"
              style={{ width: '800px', height: '400px' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Третий слайд</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
            <img
              className="d-block"
              src={vanilla_img2}
              alt="Third slide"
              style={{ width: '800px', height: '400px' }}
            />
          </Carousel.Item>
        </Carousel>
        <div className="d-flex justify-content-center mt-3">
          <Button variant="primary" onClick={handleShowModal}>Список модів</Button>
        </div>
        <Modal show={showModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Список модів</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <img
                    className="d-block"
                    src={create_img}
                    alt="First slide"
                    style={{ width: '50px', height: '50px' }}
                  />
                  &nbsp;Create
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                  <div className="d-flex justify-content-end">
                    <Button variant="success">Link</Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <img
                    className="d-block"
                    src={alexmob_img}
                    alt="First slide"
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                  />
                  &nbsp;Alex mob`s
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                  <div className="d-flex justify-content-end">
                    <Button variant="success">Link</Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <img
                    className="d-block"
                    src={jeimod_img}
                    alt="First slide"
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                  />
                  &nbsp;JEI
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                  <div className="d-flex justify-content-end">
                    <Button variant="success">Link</Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <img
                    className="d-block"
                    src={sereneseason_img}
                    alt="First slide"
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                  />
                  &nbsp;Serene Seasons
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                  <div className="d-flex justify-content-end">
                    <Button variant="success">Link</Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <img
                    className="d-block"
                    src={yungs1_img}
                    alt="First slide"
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                  />
                  &nbsp;YUNG's Better Dungeons
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                  <div className="d-flex justify-content-end">
                    <Button variant="success">Link</Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Закрити
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default VanillaPage;
