import React from 'react';

const RenderField: React.FC = ({ input, type, meta: { error, touched } }: any) => {
  return (
    <>
      <input {...input} type={type} className="convert__form-input" />
      {touched && error && <span className="convert__form-error">{error}</span>}
    </>
  );
};

export default RenderField;
