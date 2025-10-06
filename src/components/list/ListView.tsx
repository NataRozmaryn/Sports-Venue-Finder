'use client';

import React from 'react';
import { SportsVenue } from '@/types/venue';
import VenueCard from '@/components/list/VenueCard';
import { useInView } from 'react-intersection-observer';

interface ListViewProps {
  venues: SportsVenue[];
  onVenueSelect: (venue: SportsVenue) => void;
  onLoadMore: () => void;
  onViewLocationClick: (venue: SportsVenue) => void;
  viewMode: 'list' | 'grid';
  hasMore: boolean;
}

const ListView: React.FC<ListViewProps> = ({
  venues,
  onVenueSelect,
  onLoadMore,
  onViewLocationClick,
  viewMode,
  hasMore,
}) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  React.useEffect(() => {
    if (inView) {
      onLoadMore();
    }
  }, [inView, onLoadMore]);

  return (
    <div
      className={
        viewMode === 'grid'
          ? 'grid grid-cols-[305px_305px] gap-x-[20px] gap-y-[20px]'
          : ''
      }
    >
      {venues.map((venue) => (
        <VenueCard
          key={venue.id}
          venue={venue}
          onSelect={() => onVenueSelect(venue)}
          onViewLocationClick={() => onViewLocationClick(venue)}
        />
      ))}
      {hasMore && <div ref={ref} />}
    </div>
  );
};

export default ListView;
