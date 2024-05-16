import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Home from '../page';
import Modal from '../components/Modal';

describe('Home', () => {
  it('opens the modal when button is clicked', () => {
    render(<Modal />);
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Open Modal')

    expect(screen.getByTestId('modal')).toHaveAttribute('isOpen', 'false');

    // Click the button to open the modal
    act(() => {
      fireEvent.click(button);
    });

    expect(screen.getByTestId('modal')).toHaveAttribute('isOpen', 'true');

    // After clicking the button, check if isOpen prop is true
    const modal = screen.getByTestId('modal');
    expect(modal).toHaveStyle('display: block');


  });


});
