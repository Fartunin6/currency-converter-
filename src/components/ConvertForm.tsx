import React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { ConvertData } from '../pages/MainPage';

type Props = {
  symbols: object;
};

const ConvertForm: React.FC<Props & InjectedFormProps<ConvertData, Props>> = ({
  handleSubmit,
  symbols,
}) => {
  const mapAvaibleSymbols = Object.keys(symbols).map((symbol, idx) => (
    <option value={symbol} key={`${symbol}_${idx}`} className="convert__form-option">
      {symbol}
    </option>
  ));

  return (
    <form onSubmit={handleSubmit} className="convert__form">
      <div className="convert__form-container">
        <Field type="number" name="amount" component="input" className="convert__form-input" />
        <Field name="from" component="select" className="convert__form-select">
          {mapAvaibleSymbols}
        </Field>
      </div>

      <Field name="to" component="select" className="convert__form-select">
        {mapAvaibleSymbols}
      </Field>

      <button type="submit" className="convert__form-button">
        convert
      </button>
    </form>
  );
};

export default reduxForm<ConvertData, Props>({ form: 'convert-form' })(ConvertForm);
