import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import Todo from '../components/Todos'

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ title: 'delectus aut autem', completed: false }),
    })
)

test('displays todo data after fetch', async () => {
    const { getByText } = render(<Todo userId={1} />);

    // Check if the loading text is displayed
    expect(getByText('Loading...')).toBeInTheDocument();

    // Wait for the fetch to complete
    await waitFor(() => {
        expect(getByText('Title: delectus aut autem')).toBeInTheDocument()
        expect(getByText('Completed: false')).toBeInTheDocument()
    })
});