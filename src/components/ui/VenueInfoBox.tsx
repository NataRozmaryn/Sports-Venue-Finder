import React from 'react';
import { SportsVenue } from '@/types/venue';

interface VenueInfoBoxProps {
  venue: SportsVenue;
}

const VenueInfoBox: React.FC<VenueInfoBoxProps> = ({ venue }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-2 max-w-xs w-full">
      <h2 className="text-md font-bold">{venue.name}</h2>
      <p className="text-sm">{venue.addressLine1}, {venue.addressLine2}</p>
    </div>
  );
};

export default VenueInfoBox;