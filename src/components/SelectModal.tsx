import React from 'react';
import { useDispatch } from 'react-redux';
import { STORAGE_NAME } from '../constants';
import { setDefaultCurrency } from '../redux/actions/convertActions';
import useTypedSelector from '../utils/typedSelector';

import SelectForm from './forms/SelectForm';
import Modal from './Modal';

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
    localStorage.setItem(STORAGE_NAME, currency);
    dispatch(setDefaultCurrency(currency));
  };

  return (
    <Modal onClose={onClose}>
      <span className="select__title">Choose your default currency</span>
      <SelectForm onSubmit={onSubmit} symbols={symbols} />
    </Modal>
  );
};

export default SelectModal;
