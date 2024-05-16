import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import OpenModalButton from '../components/OpenModalButton';
import Modal from '../components/Modal';

describe('Home', () => {
  it('opens the modal when button is clicked', () => {
    render(<OpenModalButton />);
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Open Modal')

    act(() => {
        fireEvent.click(button);
    });

    const modalComponents = document.getElementsByClassName('modal');
    expect(modalComponents.length).toBeGreaterThan(0);
  });


});
