import React from 'react';
import { Button } from 'react-bootstrap';

const RegistrationForm = ({ handleRegisterClick }) => {
    return (
        <div className="text-center mb-3">
            Авторизація
            <form className="mb-3">
                <input type="text" className="form-control mb-2" placeholder="Логін" />
                <input type="password" className="form-control mb-2" placeholder="Пароль" />
                <Button variant="success" className="mb-2">Увійти</Button>
            </form>
            <Button variant="secondary" className="me-2" onClick={handleRegisterClick}>Реєстрація</Button>
            <Button variant="secondary">Забули пароль?</Button>
        </div>
    );
};

export default RegistrationForm;
