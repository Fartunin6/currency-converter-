import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SelectModal from './SelectModal';

const Header: React.FC = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  return (
    <header className="header">
      <Link to="/" className="header__link">
        Convert
      </Link>
      <Link to="/exchange-rate/" className="header__link">
        Exchange rate
      </Link>
      <span onClick={() => setVisibleModal(true)} className="header__link">
        Select default currency
      </span>
      {visibleModal && <SelectModal onClose={() => setVisibleModal(false)} />}
    </header>
  );
};

export default Header;
