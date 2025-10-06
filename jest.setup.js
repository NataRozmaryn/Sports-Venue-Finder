import '@testing-library/jest-dom';

const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});

window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

jest.mock('@/components/map/MapView', () => {
  return function DummyMapView() {
    return <div data-testid="map-container" />;
  };
});