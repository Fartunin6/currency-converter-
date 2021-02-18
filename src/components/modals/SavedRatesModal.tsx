import React from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../utils/typedSelector';

import { RATES_STORAGE } from '../../constants';
import { setSavedRates } from '../../redux/actions/rateActions';
import Modal from '../Modal';

type Props = {
  onClose: () => void;
};

const SavedRatesModal: React.FC<Props> = ({ onClose }) => {
  const dispatch = useDispatch();
  const { savedRates } = useTypedSelector(({ rate }) => ({ savedRates: rate.savedRates }));

  const deleteRate = (rateName: string) => {
    const storageArray = savedRates && savedRates.filter((label) => label.rateName !== rateName);
    localStorage.setItem(RATES_STORAGE, JSON.stringify(storageArray));
    storageArray !== null && dispatch(setSavedRates(storageArray));
  };

  return (
    <Modal onClose={onClose}>
      <span className="modal__title">Saved Currencies :</span>
      <ul className="saved-rate__list">
        {savedRates ? (
          savedRates.map(({ rateName, rate }, idx) => {
            return (
              <li
                onClick={() => deleteRate(rateName)}
                key={`${rate}_${idx}`}
                className="saved-rate__item">
                <span className="saved-rate__currency">{rateName}</span> : {rate}
                <span className="saved-rate__delete"></span>
              </li>
            );
          })
        ) : (
          <span className="saved-rate__error">You have not added any rates yet</span>
        )}
      </ul>
    </Modal>
  );
};

export default SavedRatesModal;
