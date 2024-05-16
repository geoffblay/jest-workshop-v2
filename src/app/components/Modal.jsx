import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ModalContainer isopen={isOpen.toString()} data-testid="modal">
        <ModalContent>
          <h1 data-testid="modal-content">This is the modal content</h1>
          <CloseModalButton onClick={() => setIsOpen(false)}>Close Modal</CloseModalButton>
        </ModalContent>
      </ModalContainer>
      {!isOpen && <OpenModalButton onClick={() => setIsOpen(true)}>Open Modal</OpenModalButton>}
    </>
  );
};

export default Modal;

const ModalContainer = styled.div`
  display: ${props => (props.isopen === 'true' ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  overflow: auto;
  padding: 50px;
`

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  max-height: 80vh;
`

const OpenModalButton = styled.button`
  background-color: #0f1056;
  margin-top: 2rem;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1rem;
`

const CloseModalButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`;
