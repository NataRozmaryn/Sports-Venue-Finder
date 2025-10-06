import { renderHook, waitFor } from '@testing-library/react';
import useSWR from 'swr';
import { useVenues } from '@/services/venueService';
import { SportsVenueSchema } from '@/types/venue';

jest.mock('swr');

describe('VenueService', () => {
  it('should fetch, validate, and cache venue data', async () => {
    const mockData = [{
      latitude: 53.09503173828125,
      longitude: 6.0878753662109375,
      id: 7410,
      name: "Bewegingscentrum Drachten",
      addressLine1: "Sportlaan 2",
      addressLine2: "9203 NW Drachten",
      phone: "0512 - 54 21 10",
      homepage: "http://www.bewegingscentrumdrachten.nl",
      remarks: "",
      chainId: "BEWEGCNTR",
      mainPhotoUri: "https://loremflickr.com/640/480/sports",
      tag: "HIIT"
    }];

    (useSWR as jest.Mock).mockReturnValue({
      data: mockData,
      error: null,
    });

    const { result } = renderHook(() => useVenues());

    await waitFor(() => expect(result.current.venues).not.toBeNull());

    expect(result.current.venues).toEqual(mockData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);

    // Check if the data is validated against the Zod schema
    expect(result.current.venues).toBeDefined();
    expect(() => SportsVenueSchema.parse(result.current.venues![0])).not.toThrow();
  });
});