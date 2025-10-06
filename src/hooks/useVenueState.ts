import React, { useState, useCallback } from 'react';
import { SportsVenue } from '@/types/venue';

export interface Coordinates {
  lat: number;
  lng: number;
}

export const useVenueState = (initialVenues: SportsVenue[] = []) => {
  const [venues, setVenues] = useState<SportsVenue[]>(initialVenues);
  const [filteredVenues, setFilteredVenues] = useState<SportsVenue[]>(
    initialVenues,
  );
  const [selectedVenue, setSelectedVenue] = useState<SportsVenue | null>(null);
  const [cityFilter, setCityFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [mapCenter, setMapCenter] = useState<Coordinates | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
  const [zoom, setZoom] = useState<number>(10);
  const [infoWindowVenue, setInfoWindowVenue] = useState<SportsVenue | null>(
    null,
  );
  const [displayedVenues, setDisplayedVenues] = useState<SportsVenue[]>([]);

  const handleFilterChange = useCallback(() => {
    const newFilteredVenues = venues.filter((venue) => {
      const cityMatch = cityFilter
        ? venue.addressLine2.toLowerCase().includes(cityFilter.toLowerCase())
        : true;
      const typeMatch = typeFilter ? venue.tag === typeFilter : true;
      return cityMatch && typeMatch;
    });
    setFilteredVenues(newFilteredVenues);
    setDisplayedVenues(newFilteredVenues.slice(0, 15));
  }, [venues, cityFilter, typeFilter]);

  React.useEffect(() => {
    handleFilterChange();
  }, [cityFilter, typeFilter, venues, handleFilterChange]);

  const loadMoreVenues = useCallback(() => {
    const currentLength = displayedVenues.length;
    const nextVenues = filteredVenues.slice(
      currentLength,
      currentLength + 15,
    );
    setDisplayedVenues((prev) => [...prev, ...nextVenues]);
  }, [displayedVenues.length, filteredVenues]);

  return {
    venues,
    filteredVenues,
    selectedVenue,
    cityFilter,
    typeFilter,
    mapCenter,
    viewMode,
    zoom,
    infoWindowVenue,
    displayedVenues,
    setVenues,
    setSelectedVenue,
    setCityFilter,
    setTypeFilter,
    setMapCenter,
    setViewMode,
    setZoom,
    setInfoWindowVenue,
    loadMoreVenues,
  };
};