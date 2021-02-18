import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../utils/typedSelector';

import { fetchRates, setSavedRates } from '../redux/actions/rateActions';
import RateList from '../components/RateList';
import { RATES_STORAGE } from '../constants';
import { Label } from '../redux/types/rateTypes';

const RatePage: React.FC = () => {
  const dispatch = useDispatch();
  const { rates, savedRates } = useTypedSelector(({ rate }) => rate);

  useEffect(() => {
    dispatch(fetchRates());

    const savedStorageRates = localStorage.getItem(RATES_STORAGE);
    dispatch(setSavedRates(savedStorageRates !== null ? JSON.parse(savedStorageRates) : []));
  }, [dispatch]);

  const addLabelToState = (rates: Label[]) => {
    dispatch(setSavedRates(rates));
  };

  return (
    <section className="rate">
      <h2 className="rate__title">All rates based on EUR</h2>
      <RateList rates={rates} savedRates={savedRates} addLabelToState={addLabelToState} />
    </section>
  );
};

export default RatePage;
