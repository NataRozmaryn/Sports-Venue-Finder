import { renderHook, act } from '@testing-library/react';
import { useVenueState } from '@/hooks/useVenueState';
import { SportsVenue } from '@/types/venue';

const mockVenues: SportsVenue[] = [
  { id: 1, name: 'Venue A', addressLine2: 'Amsterdam', tag: 'HIIT', latitude: 0, longitude: 0, addressLine1: '', mainPhotoUri: '', chainId: null },
  { id: 2, name: 'Venue B', addressLine2: 'Utrecht', tag: 'Yoga', latitude: 0, longitude: 0, addressLine1: '', mainPhotoUri: '', chainId: null },
  { id: 3, name: 'Venue C', addressLine2: 'Amsterdam', tag: 'Yoga', latitude: 0, longitude: 0, addressLine1: '', mainPhotoUri: '', chainId: null },
];

describe('useVenueState filtering', () => {
  it('should filter venues by city', () => {
    const { result } = renderHook(() => useVenueState());
    act(() => {
      result.current.setVenues(mockVenues);
      result.current.setCityFilter('Amsterdam');
    });
    expect(result.current.filteredVenues).toHaveLength(2);
    expect(result.current.filteredVenues.map((v) => v.name)).toEqual(['Venue A', 'Venue C']);
  });

  it('should filter venues by type', () => {
    const { result } = renderHook(() => useVenueState());
    act(() => {
      result.current.setVenues(mockVenues);
      result.current.setTypeFilter('Yoga');
    });
    expect(result.current.filteredVenues).toHaveLength(2);
    expect(result.current.filteredVenues.map((v) => v.name)).toEqual(['Venue B', 'Venue C']);
  });

  it('should filter venues by city and type', () => {
    const { result } = renderHook(() => useVenueState());
    act(() => {
      result.current.setVenues(mockVenues);
      result.current.setCityFilter('Amsterdam');
      result.current.setTypeFilter('Yoga');
    });
    expect(result.current.filteredVenues).toHaveLength(1);
    expect(result.current.filteredVenues[0].name).toBe('Venue C');
  });

  it('should handle city filter case-insensitively', () => {
    const { result } = renderHook(() => useVenueState());
    act(() => {
      result.current.setVenues(mockVenues);
      result.current.setCityFilter('amsterdam');
    });
    expect(result.current.filteredVenues).toHaveLength(2);
    expect(result.current.filteredVenues.map((v) => v.name)).toEqual(['Venue A', 'Venue C']);
  });

  it('should return all venues when a filter is cleared', () => {
    const { result } = renderHook(() => useVenueState());
    act(() => {
      result.current.setVenues(mockVenues);
      result.current.setCityFilter('Amsterdam');
    });
    expect(result.current.filteredVenues).toHaveLength(2);
    act(() => {
      result.current.setCityFilter('');
    });
    expect(result.current.filteredVenues).toHaveLength(3);
  });

  it('should return no venues if no match is found', () => {
    const { result } = renderHook(() => useVenueState());
    act(() => {
      result.current.setVenues(mockVenues);
      result.current.setCityFilter('NonExistentCity');
    });
    expect(result.current.filteredVenues).toHaveLength(0);
  });

  it('should handle an empty list of venues', () => {
    const { result } = renderHook(() => useVenueState());
    act(() => {
      result.current.setVenues([]);
      result.current.setCityFilter('Amsterdam');
    });
    expect(result.current.filteredVenues).toHaveLength(0);
  });
});