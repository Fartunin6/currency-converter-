import React from 'react';
import { useDispatch } from 'react-redux';
import { DEFAULT_STORAGE } from '../../constants';
import { setDefaultCurrency } from '../../redux/actions/convertActions';
import useTypedSelector from '../../utils/typedSelector';

import DefaultForm from '../forms/DefaultForm';
import Modal from '../Modal';

type Props = {
  onClose: () => void;
};

export type SelectData = {
  currency: string;
};

const SelectModal: React.FC<Props> = ({ onClose }) => {
  const dispatch = useDispatch();
  const { symbols } = useTypedSelector(({ convert }) => ({ symbols: convert.symbols }));

  const onSubmit = ({ currency }: SelectData): void => {
    localStorage.setItem(DEFAULT_STORAGE, currency);
    dispatch(setDefaultCurrency(currency));
  };

  return (
    <Modal onClose={onClose}>
      <span className="modal__title">Choose your default currency</span>
      <DefaultForm onSubmit={onSubmit} symbols={symbols} />
    </Modal>
  );
};

export default SelectModal;
