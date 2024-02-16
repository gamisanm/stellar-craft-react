import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const RegistrationPage = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1 className="text-center mb-4 mt-5">Реєстрація</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nick" className="form-label">Твій нік</label>
                            <input type="text" className="form-control" id="nick" placeholder="приклад gamisan"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Пароль</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Пошта</label>
                            <input type="email" className="form-control" id="email" placeholder='example@gmail.com'/>
                        </div>
                        <button type="submit" className="btn btn-success">Зареєструватися</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default RegistrationPage;
