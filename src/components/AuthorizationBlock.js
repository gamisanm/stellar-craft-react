import React from 'react';
import { Button } from 'react-bootstrap';

const AuthorizationBlock = ({ handleRegisterClick }) => {
    return (
        <div style={{ width: '300px', border: '1px solid #ccc', padding: '20px' }}>
            {/* Authorization block */}
            <div className="text-center mb-3">Авторизація</div>
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

export default AuthorizationBlock;
