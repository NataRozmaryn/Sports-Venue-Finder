import React from 'react';
import { SportsVenue } from '@/types/venue';
import { processImageUrl } from '@/utils/imageUrl';
import ViewLocationButton from '../ui/ViewLocationButton';
import Image from 'next/image';

interface VenueCardProps {
  venue: SportsVenue;
  onSelect: () => void;
  onViewLocationClick: () => void;
}

const VenueCard: React.FC<VenueCardProps> = ({
  venue,
  onSelect,
  onViewLocationClick,
}) => {
  return (
    <div
      className="bg-white overflow-hidden cursor-pointer"
      onClick={onSelect}
      data-testid={`venue-item-${venue.id}`}
    >
      <Image
        src={processImageUrl(venue.mainPhotoUri)}
        alt={venue.name}
        width={305}
        height={155}
        className="w-full h-[155px] object-cover rounded-lg"
        priority
      />
      <div className="flex flex-col">
        <h2 className="text-[18px] font-bold text-[#333333] leading-tight truncate mt-[16px]">{venue.name}</h2>
        <p className="text-[14px] text-[#999999] leading-tight truncate mt-[6px]">
          {venue.addressLine1}, {venue.addressLine2}
        </p>
        <div className="mt-[14px] h-[26px]">
          <ViewLocationButton
            onClick={(e) => {
              e.stopPropagation();
              onViewLocationClick();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VenueCard;