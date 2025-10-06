export const processImageUrl = (url: string): string => {
  if (url.includes('loremflickr.com')) {
    return 'https://picsum.photos/640/480';
  }
  return url;
};