'use client';

import React, { useEffect } from 'react';
import { useVenueState } from '@/hooks/useVenueState';
import { SportsVenue } from '@/types/venue';
import { useVenues } from '@/services/venueService';
import SkeletonCard from '@/components/ui/SkeletonCard';
import SkeletonMap from '@/components/ui/SkeletonMap';
import FilterControls from '@/components/ui/FilterControls';
import MapView from '@/components/map/MapView';
import ListView from '@/components/list/ListView';
import VenuePopup from '@/components/ui/VenuePopup';
import ViewToggle from '@/components/ui/ViewToggle';

export default function Home() {
  const { venues: initialVenues, isLoading } = useVenues();
  const {
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
  } = useVenueState(initialVenues);

  useEffect(() => {
    if (initialVenues) {
      setVenues(initialVenues);
    }
  }, [initialVenues, setVenues]);

  const handleViewLocationClick = (venue: SportsVenue) => {
    setMapCenter({ lat: venue.latitude, lng: venue.longitude });
    setZoom(15);
    setInfoWindowVenue(venue);
  };

  return (
    <>
      <div className="flex">
        <FilterControls
          cityFilter={cityFilter}
          setCityFilter={setCityFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          types={[...new Set(initialVenues?.map((v: SportsVenue) => v.tag) || [])]}
        />
      </div>
      <div className="border-b border-gray-200"></div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[692px] overflow-y-auto px-[31px]">
          <div className="py-[16px]">
            <div className="flex">
              <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
            </div>
          </div>
          {isLoading ? (
            <div>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : (
            <div data-testid="list-container">
              <ListView
                venues={displayedVenues}
                viewMode={viewMode}
                onVenueSelect={setSelectedVenue}
                onLoadMore={loadMoreVenues}
                onViewLocationClick={handleViewLocationClick}
                hasMore={displayedVenues.length < filteredVenues.length}
              />
            </div>
          )}
        </div>
        <div className="flex-1">
          {isLoading ? (
            <SkeletonMap />
          ) : (
            <div className="h-full">
              <MapView
                venues={filteredVenues}
                onMarkerClick={setSelectedVenue}
                center={mapCenter}
                zoom={zoom}
                infoWindowVenue={infoWindowVenue}
                setInfoWindowVenue={setInfoWindowVenue}
              />
            </div>
          )}
        </div>
      </div>
      {selectedVenue && (
        <VenuePopup
          venue={selectedVenue}
          onClose={() => setSelectedVenue(null)}
        />
      )}
    </>
  );
}
