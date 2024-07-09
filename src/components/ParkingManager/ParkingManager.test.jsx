import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ParkingManager from './ParkingManager';

describe('<ParkingManager />', () => {
  test('it should mount', () => {
    render(<ParkingManager />);

    const ParkingManager = screen.getByTestId('ParkingManager');

    expect(ParkingManager).toBeInTheDocument();
  });
});