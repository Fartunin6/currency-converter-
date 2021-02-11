import React from 'react';

type Props = {
  symbol: string;
  type: string;
};

const FormOption: React.FC<Props> = ({ symbol, type }) => {
  return (
    <option value={symbol} className={type}>
      {symbol}
    </option>
  );
};

export default FormOption;
