import { z } from 'zod';

export const SportsVenueSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  id: z.number().int(),
  name: z.string(),
  addressLine1: z.string(),
  addressLine2: z.string(),
  phone: z.string().optional(),
  // Note: homepage is not always a valid URL, so we don't use z.string().url()
  homepage: z.string().optional(),
  remarks: z.string().optional(),
  chainId: z.string().nullable(),
  mainPhotoUri: z.string(),
  tag: z.string(),
});

export type SportsVenue = z.infer<typeof SportsVenueSchema>;