'use client';

import React from 'react';
import { APIProvider, Map, useMap, InfoWindow } from '@vis.gl/react-google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { SportsVenue } from '@/types/venue';
import { Coordinates } from '@/hooks/useVenueState';
import SkeletonMap from '../ui/SkeletonMap';
import VenueInfoBox from '../ui/VenueInfoBox';
import { useGeolocation } from '@/hooks/useGeolocation';

interface MapViewProps {
  venues: SportsVenue[];
  onMarkerClick: (venue: SportsVenue) => void;
  center?: Coordinates | null;
  zoom?: number;
  infoWindowVenue: SportsVenue | null;
  setInfoWindowVenue: (venue: SportsVenue | null) => void;
}

const containerStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
};

const mapStyles: google.maps.MapTypeStyle[] = [
  {
    "featureType": "all",
    "elementType": "all",
    "stylers": [
      { "saturation": -85 },
      { "hue": "#00ffc3" }
    ]
  }
];

const defaultCenter = {
  lat: 52.0106,
  lng: 5.4247,
};

interface MarkerClustererComponentProps {
  venues: SportsVenue[];
  onMarkerClick: (venue: SportsVenue) => void;
  infoWindowVenue: SportsVenue | null;
  setInfoWindowVenue: (venue: SportsVenue | null) => void;
}

const MarkerClustererComponent: React.FC<MarkerClustererComponentProps> = ({
  venues,
  onMarkerClick,
  infoWindowVenue,
  setInfoWindowVenue
}) => {
  const map = useMap();

  React.useEffect(() => {
    if (!map || !venues.length) return;

    // Create markers array
    const markers = venues.map((venue) => {
      const marker = new google.maps.Marker({
        position: { lat: venue.latitude, lng: venue.longitude },
        title: venue.name,
        icon: {
          url: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/marker.svg`,
          scaledSize: new google.maps.Size(27, 31)
        }
      });

      // Add click listener to each marker
      marker.addListener('click', () => {
        onMarkerClick(venue);
      });

      // Add hover listeners
      marker.addListener('mouseover', () => {
        setInfoWindowVenue(venue);
      });

      return marker;
    });

    // Create marker clusterer
    const markerCluster = new MarkerClusterer({
      map,
      markers,
    });

    // Cleanup function
    return () => {
      markerCluster.clearMarkers();
    };
  }, [map, venues, onMarkerClick, setInfoWindowVenue]);

  return (
    <>
      {infoWindowVenue && (
        <InfoWindow
          position={{
            lat: infoWindowVenue.latitude,
            lng: infoWindowVenue.longitude,
          }}
          pixelOffset={[0, -33]}
          onCloseClick={() => setInfoWindowVenue(null)}
        >
          <VenueInfoBox venue={infoWindowVenue} />
        </InfoWindow>
      )}
    </>
  );
};

const MapView: React.FC<MapViewProps> = ({
  venues,
  onMarkerClick,
  center,
  zoom,
  infoWindowVenue,
  setInfoWindowVenue,
}) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { location } = useGeolocation();
  const mapCenter = center || (location ? { lat: location.latitude, lng: location.longitude } : defaultCenter);

  if (!apiKey) {
    console.error('Google Maps API key is not configured.');
    return <SkeletonMap />;
  }

  return (
    <div style={containerStyle}>
      <APIProvider apiKey={apiKey}>
        <Map
          key={`${mapCenter.lat}-${mapCenter.lng}-${zoom}`}
          defaultCenter={mapCenter}
          defaultZoom={zoom || 10}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          styles={mapStyles}
        >
          <MarkerClustererComponent
            venues={venues}
            onMarkerClick={onMarkerClick}
            infoWindowVenue={infoWindowVenue}
            setInfoWindowVenue={setInfoWindowVenue}
          />
        </Map>
      </APIProvider>
    </div>
  );
};

export default MapView;