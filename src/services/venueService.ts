import useSWR from 'swr';
import { SportsVenueSchema, SportsVenue } from '@/types/venue';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  const json = await res.json();
  return SportsVenueSchema.array().parse(json);
};

export const useVenues = () => {
  const { data, error } = useSWR<SportsVenue[]>(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/api/venues`, fetcher);

  return {
    venues: data,
    isLoading: !error && !data,
    isError: !!error,
  };
};