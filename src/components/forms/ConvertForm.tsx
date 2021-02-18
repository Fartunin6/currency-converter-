import React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { ConvertData } from '../../pages/MainPage';

import FormOption from '../FormOption';

type Props = {
  symbols: object;
  defaultCurrency: string;
};

const ConvertForm: React.FC<Props & InjectedFormProps<ConvertData, Props>> = ({
  handleSubmit,
  symbols,
  defaultCurrency,
}) => {
  const mapAvaibleSymbols = Object.keys(symbols).map((symbol, idx) => (
    <FormOption symbol={symbol} key={`${symbols}_${idx}`} type="convert__form-option" />
  ));

  const defaultOption = defaultCurrency && (
    <FormOption symbol={defaultCurrency} type="convert__form-option" />
  );

  return (
    <form onSubmit={handleSubmit} className="convert__form">
      <div className="convert__form-container">
        <label className="convert__form-label">
          <span className="convert__form-name">amount</span>
          <Field type="number" name="amount" component="input" className="convert__form-input" />
        </label>
        <label className="convert__form-label">
          <span className="convert__form-name">from</span>
          <Field name="from" component="select" className="convert__form-select">
            {defaultOption}
            {mapAvaibleSymbols}
          </Field>
        </label>
      </div>

      <label className="convert__form-label">
        <span className="convert__form-name">to</span>
        <Field name="to" component="select" className="convert__form-select">
          {defaultOption}
          {mapAvaibleSymbols}
        </Field>
      </label>

      <button type="submit" className="convert__form-button btn-grad-blue">
        convert
      </button>
    </form>
  );
};

export default reduxForm<ConvertData, Props>({ form: 'convert-form' })(ConvertForm);