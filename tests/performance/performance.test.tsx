import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Home from '@/app/page';

describe('Performance Tests', () => {
  it('should render the Home page within the performance budget', async () => {
    const startTime = performance.now();
    const { findByTestId } = render(<Home />);
    await waitFor(() => findByTestId('list-container'));
    const endTime = performance.now();
    const renderTime = endTime - startTime;    
    expect(renderTime).toBeLessThan(500);
  });
});