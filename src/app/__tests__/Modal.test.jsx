import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Home from '../page';
import Modal from '../components/Modal';

describe('Home', () => {
  it('opens the modal when button is clicked', () => {
    render(<Modal />);
    const openButton = screen.getByRole('button')
    expect(openButton).toHaveTextContent('Open Modal')

    expect(screen.getByTestId('modal')).toHaveStyle('display: none');

    act(() => {
      fireEvent.click(openButton);
    });

    const modal = screen.getByTestId('modal');
    expect(modal).toHaveStyle('display: block');


    const closeButton = screen.getByRole('button')
    expect(closeButton).toHaveTextContent('Close Modal')

    act(() => {
        fireEvent.click(closeButton);
      });

      expect(screen.getByTestId('modal')).toHaveStyle('display: none');
  });


});
