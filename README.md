# Sports Venue Finder

A web-based platform that allows users to find and explore sports venues in their area.
This is home test application implementation.

## Key Features

*   **Interactive Map View**: Displays all sports venues as markers on a map.
*   **Filterable List/Grid View**: Allows users to filter venues by city and type, with the option to switch between list and grid layouts.
*   **Synchronized Views**: The map and list views are synchronized for seamless interaction.
*   **Venue Details**: A pop-up that displays detailed information about a selected venue.
*   **Geolocation**: Centers the map on the user's current location by default.
*   **Performance Optimizations**: Implements marker clustering, lazy loading, and skeleton loaders for a smooth and responsive experience.

## Technology Stack

*   **Next.js**: A React framework for building server-side rendered (SSR) and statically generated (SSG) applications.
*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that improves code quality and reliability.
*   **Tailwind CSS**: A utility-first CSS framework for building custom designs.
*   **SWR**: A React hook for data fetching, caching, and revalidation.
*   **Zod**: A TypeScript-first schema declaration and validation library.
*   **Jest and React Testing Library**: A testing framework and a set of utilities for testing React components.
*   **Google Maps API**: Used for the interactive map view.

## Getting Started

### Prerequisites

*   Node.js
*   npm

### Installation

1.  Clone the repository.
2.  Create a `.env.local` file and add the following, replacing `YOUR_GOOGLE_MAPS_API_KEY` with your actual key:
    ```
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To run the application in development mode, use the following command from the `frontend` directory:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Running Tests

To run the test suite, use the following command from the `frontend` directory:

```bash
npm test
```