import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import Home from '@/app/page';
import useSWR from 'swr';
jest.mock('swr');

(useSWR as jest.Mock).mockReturnValue({
  data: [
    {
      latitude: 53.09503173828125,
      longitude: 6.0878753662109375,
      id: 7410,
      name: 'Bewegingscentrum Drachten',
      addressLine1: 'Sportlaan 2',
      addressLine2: '9203 NW Drachten',
      phone: '0512 - 54 21 10',
      homepage: 'http://www.bewegingscentrumdrachten.nl',
      remarks: '',
      chainId: 'BEWEGCNTR',
      mainPhotoUri: 'https://loremflickr.com/640/480/sports',
      tag: 'HIIT',
    },
    {
      latitude: 52.370216,
      longitude: 4.895168,
      id: 9001,
      name: 'Amsterdam Yoga Center',
      addressLine1: 'Prinsengracht 10',
      addressLine2: '1015 Amsterdam',
      phone: '020 - 12 34 56',
      homepage: 'https://example.com/yoga',
      remarks: '',
      chainId: null,
      mainPhotoUri: 'https://loremflickr.com/640/480/yoga',
      tag: 'Yoga',
    },
  ],
  error: null,
});

describe('Venue Finder Page', () => {
  it('should render the map and list components on initial load', async () => {
    await act(async () => {
      render(<Home />);
    });
    
    // Check for a map container
    const mapElement = screen.getByTestId('map-container');
    expect(mapElement).toBeInTheDocument();

    // Check for a list container
    const listElement = screen.getByTestId('list-container');
    expect(listElement).toBeInTheDocument();
  });

  it('should filter the list and map when user interacts with filter controls', async () => {
    await act(async () => {
      render(<Home />);
    });

    // Simulate user input for city filter
    const cityInput = screen.getByPlaceholderText('Filter on city');
    const typeSelect = screen.getByLabelText('Filter on type');

    expect(screen.getByText('Bewegingscentrum Drachten')).toBeInTheDocument();
    expect(screen.getByText('Amsterdam Yoga Center')).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(cityInput, { target: { value: 'Amsterdam' } });
      fireEvent.change(typeSelect, { target: { value: 'Yoga' } });
    });

    await waitFor(() => {
      expect(screen.queryByText('Bewegingscentrum Drachten')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Amsterdam Yoga Center')).toBeInTheDocument();
  });

  it('should show a pop-up with venue details when a venue is selected', async () => {
    await act(async () => {
      render(<Home />);
    });

    // Simulate clicking on a venue in the list
    const venueInList = await screen.findByText('Bewegingscentrum Drachten', {}, { timeout: 3000 });
    await act(async () => {
      fireEvent.click(venueInList);
    });

    // Check if the pop-up is displayed with the correct information
    const popup = screen.getByTestId('venue-popup');
    expect(popup).toBeInTheDocument();
    expect(popup).toHaveTextContent('Bewegingscentrum Drachten');
  });
});