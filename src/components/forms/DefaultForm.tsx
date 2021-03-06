import React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import FormOption from '../FormOption';
import { SelectData } from '../modals/DefaultModal';

type Props = {
  symbols: object;
};

const SelectForm: React.FC<Props & InjectedFormProps<SelectData, Props>> = ({
  handleSubmit,
  symbols,
}) => {
  return (
    <form onSubmit={handleSubmit} className="default__form">
      <Field name="currency" component="select" className="default__form-select">
        {Object.keys(symbols).map((symbol, idx) => (
          <FormOption symbol={symbol} key={`${symbols}_${idx}`} type="convert__form-option" />
        ))}
      </Field>
      <button type="submit" className="default__form-button btn-grad-green">
        select currency
      </button>
    </form>
  );
};

export default reduxForm<SelectData, Props>({ form: 'select-form', enableReinitialize: true })(
  SelectForm,
);
