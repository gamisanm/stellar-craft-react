import React from 'react';
import { Card, Button } from 'react-bootstrap';
import AuthorizationBlock from '../components/AuthorizationBlock';

const HomePage = ({ handleRegisterClick }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className="mt-3">Домашня сторінка</h1>

            {/* News Cards and Authorization Block */}
            <div className="row mt-3">
                {/* Authorization Block */}
                <div className="col-md-4 offset-md-8">
                    <AuthorizationBlock handleRegisterClick={handleRegisterClick} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
