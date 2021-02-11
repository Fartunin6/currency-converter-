import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} className="overlay" />
      <div className="modal">
        {children}
        <div onClick={onClose} className="modal__close"></div>
      </div>
    </>,
    document.getElementById('modal')!,
  );
};

export default Modal;
