import React from 'react';

const Modal = ({ closeModal, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={closeModal} className="close-button">
          Fermer
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
