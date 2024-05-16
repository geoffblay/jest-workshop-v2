import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CountButton from '../components/CountButton'
 
describe('CountButton', () => {
    it('renders a button with count 0', () => {
        render(<CountButton />)
        const button = screen.getByRole('button')
        expect(button).toHaveTextContent('count is 0')
    })
     
    it('increments the count when clicked', async () => {
        render(<CountButton />)
        const button = screen.getByRole('button')
        button.click()
        const updatedButton = await screen.findByText('count is 1')
        expect(updatedButton).toBeInTheDocument()
    })
})