import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../utils/typedSelector';

import ConvertForm from '../components/ConvertForm';
import { fetchRate, fetchSymbols } from '../redux/actions/convertActions';

export type ConvertData = {
  amount: number;
  from: string;
  to: string;
};

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const { symbols } = useTypedSelector(({ convert }) => convert);

  useEffect(() => {
    dispatch(fetchSymbols());
  }, [dispatch]);

  const onSubmit = (convertData: ConvertData) => {
    dispatch(fetchRate(convertData));
  };

  return (
    <section className="convert">
      <ConvertForm onSubmit={onSubmit} symbols={symbols} />
    </section>
  );
};

export default MainPage;
