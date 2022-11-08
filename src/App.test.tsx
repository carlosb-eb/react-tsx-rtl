import { getNodeText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';
import React from 'react';

describe('react-testing-library', () => {
  it('loads and displays correct', async () => {
    render(<App />);

    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();

    if (!button) {
      throw new Error('not found button');
    }
    expect(getNodeText(button)).toBe('count is: 0');

    userEvent.click(button);
    expect(getNodeText(button)).toBe('count is: 1');

    userEvent.click(button);
    expect(getNodeText(button)).toBe('count is: 2');

    userEvent.click(button);
    expect(getNodeText(button)).toBe('count is: 3');

    userEvent.click(button);
    expect(getNodeText(button)).toBe('count is: 4');
    preview.debug();
  });
});
