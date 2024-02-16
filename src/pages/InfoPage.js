// InfoPage.js
import React from 'react';
import AuthorizationBlock from '../components/AuthorizationBlock';

const InfoPage = ({ handleRegisterClick }) => {
    return (
      <div style={{ textAlign: 'center' }}>
            <h1 className="mt-3">Різна інформація</h1>
            {/* Include AuthorizationBlock component here */}
            <div style={{ width: '1100px', margin: '20px auto', display: 'flex', justifyContent: 'flex-end' }}>
                <AuthorizationBlock handleRegisterClick={handleRegisterClick} />
            </div>
        </div>
    );
};

export default InfoPage;
