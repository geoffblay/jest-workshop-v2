import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Title from '../components/Title'

test('renders a title with the name prop', () => {
    render(<Title name="world" />)
    const title = screen.getByRole('heading')

    // Check if the title is rendered with the correct name
    expect(title).toHaveTextContent('Hello there, world')
});