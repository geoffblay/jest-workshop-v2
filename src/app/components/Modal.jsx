import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    overflow: 'auto',
    padding: '50px'
  };

  const modalContentStyle = {
    backgroundColor: '#fefefe',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '600px',
    maxHeight: '80vh',
  };

  return (
    <>
      <div className="modal" data-testid="modal" style={modalStyle}>
        <div className="modal-content" style={modalContentStyle}>
          <div data-testid="modal-content">This is the modal content</div>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </div>
      {!isOpen && <button onClick={openModal}>Open Modal</button>}
    </>
  );
};

export default Modal;
