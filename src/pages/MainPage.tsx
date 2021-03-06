import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../utils/typedSelector';

import ConvertForm from '../components/forms/ConvertForm';
import { fetchRate, setDefaultCurrency } from '../redux/actions/convertActions';
import { DEFAULT_STORAGE } from '../constants';

export type ConvertData = {
  amount: number;
  from: string;
  to: string;
};

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const { symbols, rate, defaultCurrency } = useTypedSelector(({ convert }) => convert);

  useEffect(() => {
    const currency = localStorage.getItem(DEFAULT_STORAGE);
    if (currency) {
      dispatch(setDefaultCurrency(currency));
    }
  }, [dispatch]);

  const onSubmit = (convertData: ConvertData): void => {
    console.log(defaultCurrency);
    console.log(convertData);
    dispatch(fetchRate(convertData));
  };

  return (
    <section className="convert">
      <ConvertForm
        onSubmit={onSubmit}
        initialValues={{ from: defaultCurrency, to: defaultCurrency }}
        symbols={symbols}
        defaultCurrency={defaultCurrency}
      />
      {rate && <span className="convert__rate">{rate}</span>}
    </section>
  );
};

export default MainPage;
