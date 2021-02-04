import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        Convert
      </Link>
      <Link to="/exchange-rate/" className="header__link">
        Exchange rate
      </Link>
    </header>
  );
};

export default Header;
