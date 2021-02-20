import React from 'react';
import { Label, Rates } from '../redux/types/rateTypes';
import starIcon from '../assets/images/star.svg';
import { RATES_STORAGE } from '../constants';

type Props = {
  rates: Rates;
  savedRates: Label[] | null;
  addLabelToState: (rates: Label[]) => void;
};

const RateList: React.FC<Props> = ({ rates, savedRates, addLabelToState }) => {
  const addLabel = (label: Label) => {
    const storageArray = savedRates
      ? savedRates.filter((el) => el.rateName === label.rateName).length > 0
        ? savedRates
        : [...savedRates, label]
      : [label];

    localStorage.setItem(RATES_STORAGE, JSON.stringify(storageArray));
    addLabelToState(storageArray);
  };

  return (
    <ul className="rate__list">
      {Object.keys(rates).map((rateName, idx) => {
        const label = { rate: rates[rateName], rateName: rateName };
        return (
          <li onClick={() => addLabel(label)} key={`${rateName}_${idx}`} className="rate__item">
            <span className="rate__currency">{label.rateName}</span> : {label.rate}
            <img src={starIcon} className="rate__icon" alt="star" />
          </li>
        );
      })}
    </ul>
  );
};

export default RateList;
