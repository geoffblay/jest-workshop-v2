import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../page'
 
describe('Home', () => {
    it('renders the home page', () => {
        render(<Home />)
        const title = screen.getByRole('heading', { name: /demo/i })
        expect(title).toBeInTheDocument()
    })
})