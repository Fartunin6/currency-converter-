import React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { ConvertData } from '../pages/MainPage';

const ConvertForm: React.FC<InjectedFormProps<ConvertData>> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="convert__form">
      <div className="convert__form-container">
        <Field type="number" name="amount" component="input" className="convert__form-input" />
        <Field name="from" component="select" className="convert__form-select">
          <option value="USD" className="convert__form-option">
            usd
          </option>
          <option value="EUR" className="convert__form-option">
            eur
          </option>
        </Field>
      </div>

      <Field name="to" component="select" className="convert__form-select">
        <option value="EUR" className="convert__form-option">
          eur
        </option>
        <option value="USD" className="convert__form-option">
          usd
        </option>
      </Field>

      <button type="submit" className="convert__form-button">
        convert
      </button>
    </form>
  );
};

export default reduxForm<ConvertData>({ form: 'convert-form' })(ConvertForm);
