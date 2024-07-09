import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimeKeeper from './TimeKeeper';

describe('<TimeKeeper />', () => {
  test('it should mount', () => {
    render(<TimeKeeper />);

    const TimeKeeper = screen.getByTestId('TimeKeeper');

    expect(TimeKeeper).toBeInTheDocument();
  });
});