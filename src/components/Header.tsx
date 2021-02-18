import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SelectModal from './modals/DefaultModal';
import SavedRatesModal from './modals/SavedRatesModal';

const Header: React.FC = () => {
  const [visibleDefaultModal, setVisibleDefaultModal] = useState<boolean>(false);
  const [visibleRatesModal, setVisibleRatesModal] = useState<boolean>(false);

  return (
    <header className="header">
      <Link to="/" className="header__link">
        Convert
      </Link>
      <Link to="/exchange-rates/" className="header__link">
        Exchange rates
      </Link>

      <span onClick={() => setVisibleRatesModal(true)} className="header__link">
        Favorite currencies
      </span>
      <span onClick={() => setVisibleDefaultModal(true)} className="header__link">
        Select default currency
      </span>

      {visibleRatesModal && <SavedRatesModal onClose={() => setVisibleRatesModal(false)} />}
      {visibleDefaultModal && <SelectModal onClose={() => setVisibleDefaultModal(false)} />}
    </header>
  );
};

export default Header;
