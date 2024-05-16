import '@testing-library/jest-dom'
import { render, screen, fireEvent, act } from '@testing-library/react'
import CountButton from '../components/CountButton'

describe('CountButton', () => {
    it('renders a button with count 0', () => {
        render(<CountButton />)
        const button = screen.getByRole('button')
        expect(button).toHaveTextContent('count is 0')
    })

    it('increments the count when clicked', async () => {
        render(<CountButton />);
        const button = screen.getByRole('button');

        /*
        act ensures that the behavior in your tests matches what happens 
        in the browser more closely by executing pending useEffects before returning
        */
        await act(async () => {
            fireEvent.click(button);
        });

        // Check if the count is incremented
        expect(button).toHaveTextContent('count is 1');
    })
})