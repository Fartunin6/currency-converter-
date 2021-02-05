import React from 'react';
import { useDispatch } from 'react-redux';

import ConvertForm from '../components/ConvertForm';

export type ConvertData = {
  ammount: number;
  from: string;
  to: string;
};

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmit = (Convertdata: ConvertData) => {};

  return (
    <section className="convert">
      <ConvertForm onSubmit={onSubmit} />
    </section>
  );
};

export default MainPage;
