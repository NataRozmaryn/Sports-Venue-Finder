import React from 'react';
import { SportsVenue } from '@/types/venue';
import { processImageUrl } from '@/utils/imageUrl';
import Image from 'next/image';

interface VenuePopupProps {
  venue: SportsVenue;
  onClose: () => void;
}

const VenuePopup: React.FC<VenuePopupProps> = ({ venue, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
      data-testid="venue-popup"
    >
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
        <Image src={processImageUrl(venue.mainPhotoUri)} alt={venue.name} width={640} height={480} className="w-full h-64 object-cover rounded-t-lg" />
        <div className="p-4">
          <h2 className="text-2xl font-bold">{venue.name}</h2>
          <p className="text-lg">{venue.addressLine1}, {venue.addressLine2}</p>
          <p><strong>Phone:</strong> {venue.phone || 'N/A'}</p>
          <p><strong>Website:</strong> <a href={venue.homepage} target="_blank" rel="noopener noreferrer">{venue.homepage}</a></p>
          <p><strong>Chain:</strong> {venue.chainId || 'N/A'}</p>
          <p><strong>Type:</strong> {venue.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default VenuePopup;