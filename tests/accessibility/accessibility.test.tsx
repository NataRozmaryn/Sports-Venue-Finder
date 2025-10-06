import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Home from '@/app/page';
import Header from '@/components/ui/Header';
import VenuePopup from '@/components/ui/VenuePopup';
import { SportsVenue } from '@/types/venue';

expect.extend(toHaveNoViolations);

const mockVenue: SportsVenue = {
  id: 1,
  name: 'Test Venue',
  addressLine1: '123 Test St',
  addressLine2: 'Test City, 12345',
  latitude: 0,
  longitude: 0,
  mainPhotoUri: 'https://example.com/photo.jpg',
  tag: 'Test Tag',
  chainId: null,
};

describe('Accessibility Tests', () => {
  it('should have no accessibility violations on the Home page', async () => {
    const { container, findByTestId } = render(<Home />);
    await waitFor(() => findByTestId('list-container'));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations on the Header component', async () => {
    const { container } = render(<Header />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no accessibility violations on the VenuePopup component', async () => {
    const { container } = render(<VenuePopup venue={mockVenue} onClose={() => {}} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});