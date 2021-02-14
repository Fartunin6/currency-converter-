import React from 'react';
import { Rates } from '../redux/types/rateTypes';

type Props = {
  rates: Rates;
};

const RateList: React.FC<Props> = ({ rates }) => {
  return (
    <ul className="rate__list">
      {Object.keys(rates).map((rateName, idx) => {
        return (
          <li key={`${rateName}_${idx}`} className="rate__item">
            <span className="rate__currency">{rateName}</span> : {rates[rateName]}
          </li>
        );
      })}
    </ul>
  );
};

export default RateList;
