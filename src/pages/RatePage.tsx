import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../utils/typedSelector';

import { fetchRates } from '../redux/actions/rateActions';
import RateList from '../components/RateList';

const RatePage: React.FC = () => {
  const dispatch = useDispatch();
  const { rates } = useTypedSelector(({ rate }) => rate);

  useEffect(() => {
    dispatch(fetchRates());
  }, [dispatch]);

  return (
    <section className="rate">
      <h2 className="rate__title">All rates based on EUR</h2>
      <RateList rates={rates} />
    </section>
  );
};

export default RatePage;
