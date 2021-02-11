import React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import FormOption from '../FormOption';
import { SelectData } from '../SelectModal';

type Props = {
  symbols: object;
};

const SelectForm: React.FC<Props & InjectedFormProps<SelectData, Props>> = ({
  handleSubmit,
  symbols,
}) => {
  const mapAvaibleSymbols = Object.keys(symbols).map((symbol, idx) => (
    <FormOption symbol={symbol} key={`${symbols}_${idx}`} type="convert__form-option" />
  ));

  return (
    <form onSubmit={handleSubmit} className="select__form">
      <Field name="currency" component="select" className="select__form-select">
        {mapAvaibleSymbols}
      </Field>
      <button type="submit" className="select__form-button btn-grad-green">
        select currency
      </button>
    </form>
  );
};

export default reduxForm<SelectData, Props>({ form: 'select-form' })(SelectForm);
