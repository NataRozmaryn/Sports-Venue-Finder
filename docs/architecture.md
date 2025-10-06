# Architecture Document: Sports Venue Finder

## 1. High-Level Overview

This document provides a comprehensive overview of the architecture and technical design of the Sports Venue Finder application. The application is a web-based platform that allows users to find and explore sports venues in their area. It is designed to be a single-page application (SPA) with a focus on performance, accessibility, and user experience.

The key features of the application include:

*   **Interactive Map View**: A map-based interface that displays all sports venues as markers.
*   **Filterable List View**: A list-based interface that allows users to filter venues by city and type.
*   **Synchronized Views**: The map and list views are synchronized, allowing users to interact with both seamlessly.
*   **Venue Details**: A pop-up that displays detailed information about a selected venue.

The application is built using a modern technology stack, including Next.js, React, TypeScript, and Tailwind CSS. These technologies were chosen to provide a robust, scalable, and maintainable foundation for the application.
## 2. Project Organization Structure

The project is organized into a clean and modular structure, with a clear separation of concerns between the different parts of the application. The following is a high-level overview of the project's folder and file structure:

```
frontend/
├── public/
│   ├── ... # Static assets (images, fonts, etc.)
├── src/
│   ├── app/
│   │   ├── ... # Next.js app router files (pages, layouts, etc.)
│   ├── components/
│   │   ├── list/
│   │   │   ├── ListView.tsx
│   │   │   └── VenueCard.tsx
│   │   ├── map/
│   │   │   └── MapView.tsx
│   │   └── ui/
│   │       ├── ... # Reusable UI components (buttons, inputs, etc.)
│   ├── data/
│   │   └── merchants.json
│   ├── hooks/
│   │   └── useVenueState.ts
│   ├── services/
│   │   └── venueService.ts
│   ├── types/
│   │   └── venue.ts
│   └── utils/
│       └── imageUrl.ts
└── tests/
    ├── accessibility/
    │   └── accessibility.test.tsx
    ├── integration/
    │   └── venueFinder.test.tsx
    ├── performance/
    │   └── performance.test.tsx
    └── unit/
        ├── filtering.test.ts
        └── venueService.test.ts
```

### 2.1. `public`

This directory contains all the static assets for the application, such as images, fonts, and other files that are served directly to the client.

### 2.2. `src`

This is the main source code directory for the application. It contains all the React components, hooks, services, and other logic for the application.

*   **`app`**: This directory contains all the Next.js app router files, such as pages, layouts, and API routes.
*   **`components`**: This directory contains all the React components for the application, organized into subdirectories by feature.
*   **`data`**: This directory contains the `merchants.json` file, which is a local data source used for the application.
*   **`hooks`**: This directory contains all the custom React hooks for the application, such as the `useVenueState` hook for managing the application's state.
*   **`services`**: This directory contains all the services for the application, such as the `VenueService` for fetching data from the API.
*   **`types`**: This directory contains all the TypeScript types and schemas for the application, such as the `SportsVenue` type and the `SportsVenueSchema` for validating the API data.
*   **`utils`**: This directory contains all the utility functions for the application, such as the `imageUrl` processor.

### 2.3. `tests`

This directory contains all the tests for the application, organized into subdirectories by type.

*   **`accessibility`**: This directory contains all the accessibility tests for the application, which are run using `axe-core` and `jest-axe`.
*   **`integration`**: This directory contains all the integration tests for the application, which test the interaction between different parts of the application.
*   **`performance`**: This directory contains all the performance tests for the application, which measure the render times of the main components.
*   **`unit`**: This directory contains all the unit tests for the application, which test individual functions and components in isolation.
## 3. Libraries and Frameworks

The application is built using a carefully selected set of libraries and frameworks, each chosen for its specific strengths and benefits. The following is a detailed overview of the technologies used in the project:

### 3.1. Next.js

*   **Purpose**: Next.js is a React framework that provides a robust and scalable foundation for the application. It offers a number of features that are essential for building modern web applications, such as server-side rendering (SSR), static site generation (SSG), and a powerful routing system.
*   **Rationale**: Next.js was chosen for its excellent performance, SEO-friendliness, and developer experience. Its SSR capabilities are particularly important for the Sports Venue Finder application, as they ensure that the initial page load is fast and that the content is easily discoverable by search engines.
*   **Usage**: Next.js is used as the primary framework for the application, handling everything from routing and rendering to data fetching and API routes.

### 3.2. React

*   **Purpose**: React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of the application in a declarative and efficient way.
*   **Rationale**: React was chosen for its component-based architecture, which makes it easy to build complex and interactive user interfaces. Its large and active community also provides a wealth of resources and support.
*   **Usage**: React is used to build all the UI components in the application, from the main page layout to the individual venue cards and pop-ups.

### 3.3. TypeScript

*   **Purpose**: TypeScript is a typed superset of JavaScript that adds static types to the language. This allows developers to catch errors at compile time, rather than at runtime, which can help to improve the quality and reliability of the code.
*   **Rationale**: TypeScript was chosen for its ability to improve the developer experience and reduce the number of bugs in the code. Its static types also make the code more self-documenting, which can be helpful for new developers who are trying to understand the codebase.
*   **Usage**: TypeScript is used for all the code in the application, from the React components to the API routes and utility functions.

### 3.4. Tailwind CSS

*   **Purpose**: Tailwind CSS is a utility-first CSS framework that provides a set of low-level utility classes that can be used to build custom designs.
*   **Rationale**: Tailwind CSS was chosen for its flexibility and ease of use. It allows developers to build custom designs without having to write any custom CSS, which can help to speed up the development process.
*   **Usage**: Tailwind CSS is used for all the styling in the application, from the main page layout to the individual UI components.

### 3.5. SWR

*   **Purpose**: SWR is a React hook for data fetching that provides a simple and efficient way to fetch, cache, and revalidate data.
*   **Rationale**: SWR was chosen for its ease of use and its powerful features, such as automatic revalidation, caching, and error handling. It is particularly well-suited for applications that need to display data that is updated frequently, such as the Sports Venue Finder.
*   **Usage**: SWR is used to fetch the venue data from the API and manage the state of the data in the application.

### 3.6. Zod

*   **Purpose**: Zod is a TypeScript-first schema declaration and validation library. It allows developers to define a schema for their data and then validate that the data conforms to that schema.
*   **Rationale**: Zod was chosen for its excellent TypeScript support and its simple and intuitive API. It is particularly well-suited for validating data from external sources, such as APIs, as it can help to prevent invalid data from entering the application.
*   **Usage**: Zod is used to define a schema for the venue data and validate the data that is fetched from the API.

### 3.7. Jest and React Testing Library

*   **Purpose**: Jest is a JavaScript testing framework that provides a simple and intuitive API for writing tests. React Testing Library is a set of utilities that make it easy to test React components in a way that resembles how they are used by end-users.
*   **Rationale**: Jest and React Testing Library were chosen for their excellent developer experience and their focus on testing the behavior of the application, rather than the implementation details.
*   **Usage**: Jest and React Testing Library are used to write all the tests for the application, including unit tests, integration tests, and accessibility tests.

## 4. Architectural Decisions and Patterns

The application's architecture is based on a set of key decisions and patterns that are designed to promote a clean, scalable, and maintainable codebase. The following is a detailed overview of the most important architectural choices:

### 4.1. Component-Based Architecture

The application is built using a component-based architecture, which is a key feature of the React library. This means that the UI is broken down into a set of small, reusable components, each with its own specific responsibility. This approach has a number of benefits, including:

*   **Modularity**: Components can be developed and tested in isolation, which can help to improve the quality and reliability of the code.
*   **Reusability**: Components can be reused throughout the application, which can help to reduce the amount of duplicated code.
*   **Maintainability**: Components are small and focused, which can make it easier to understand and maintain the codebase.

### 4.2. Centralized State Management

The application uses a centralized state management pattern, with a custom `useVenueState` hook that is responsible for managing the application's state. This hook provides a single source of truth for the application's state, which can help to prevent inconsistencies and make the code easier to reason about.

The `useVenueState` hook is responsible for managing the following state:

*   **Venues**: The list of all venues.
*   **Filtered Venues**: The list of venues that match the current filter criteria.
*   **Selected Venue**: The venue that is currently selected by the user.
*   **Filter Criteria**: The current filter criteria, such as the city and type.
*   **Map State**: The current state of the map, such as the center and zoom level.

### 4.3. Geolocation for Default Map Center

To provide a more personalized experience, the application attempts to center the map on the user's current location by default. This is achieved using a custom `useGeolocation` hook.

The implementation is as follows:

1.  The `useGeolocation` hook (`frontend/src/hooks/useGeolocation.ts`) is a reusable hook that encapsulates the browser's `navigator.geolocation` API.
2.  When the hook is used, it requests the user's current position. If the user grants permission, the hook returns the latitude and longitude.
3.  The `MapView` component calls the `useGeolocation` hook to get the user's location.
4.  If the location is successfully retrieved, it is used as the initial center for the map.
5.  If the user denies permission or an error occurs, the map falls back to a predefined default center in the Netherlands.

### 4.3. Performance Optimizations

To ensure a smooth and responsive user experience, the application implements a number of performance optimization techniques:

*   **Marker Clustering**: To handle a large number of venues on the map, the application uses marker clustering to group nearby venues into a single marker at high zoom levels. This reduces the number of markers that need to be rendered at once, which can significantly improve the performance of the map.
*   **Lazy Loading**: To improve the performance of the list view, the application uses lazy loading to load more venues as the user scrolls. This means that the application only loads the venues that are currently visible, which can help to reduce the initial page load time and improve the overall performance of the application.
*   **Skeleton Loaders**: To improve the perceived performance of the application, the application displays skeleton loaders while the data is being fetched from the API. This provides a visual cue to the user that the application is working, which can help to reduce the frustration of waiting for the data to load.

Skeleton loaders are a type of loading indicator that provides a more engaging and user-friendly experience than a traditional spinner. They are essentially a wireframe of the UI that is displayed while the data is being fetched from the API. This gives the user a sense of what the UI will look like before the data has loaded, which can help to reduce the perceived loading time.

In the Sports Venue Finder application, skeleton loaders are used in both the map and list views. The `SkeletonCard` component is used to display a wireframe of a venue card in the list view, and the `SkeletonMap` component is used to display a wireframe of the map.

The implementation of the skeleton loaders is straightforward. The `Home` component checks the `isLoading` state from the `useVenues` hook. If `isLoading` is true, the `SkeletonCard` and `SkeletonMap` components are rendered. Once the data has been fetched, the `isLoading` state is set to false, and the actual `ListView` and `MapView` components are rendered.
### 4.5. Marker Clustering

Marker clustering is a technique that is used to improve the performance of maps with a large number of markers. It works by grouping nearby markers into a single marker at high zoom levels. This reduces the number of markers that need to be rendered at once, which can significantly improve the performance of the map.

In the Sports Venue Finder application, marker clustering is implemented using the `@googlemaps/markerclusterer` library. The `MarkerClustererComponent` in the `MapView.tsx` file is responsible for creating the marker clusterer and adding the markers to it.

The implementation is as follows:

1.  The `MarkerClustererComponent` receives the list of venues as a prop.
2.  It then creates a new `MarkerClusterer` instance and a new `google.maps.Marker` instance for each venue.
3.  The markers are then added to the marker clusterer, which automatically groups them into clusters based on the zoom level.

This approach ensures that the map remains fast and responsive, even when there are a large number of venues to display.

### 4.6. Lazy Loading

Lazy loading is a technique that is used to improve the performance of long lists. It works by loading more items as the user scrolls down the page. This means that the application only loads the items that are currently visible, which can help to reduce the initial page load time and improve the overall performance of the application.

In the Sports Venue Finder application, lazy loading is implemented using the `react-intersection-observer` library. The `ListView` component uses the `useInView` hook to detect when the user has scrolled to the bottom of the list. When the user scrolls to the bottom of the list, the `onLoadMore` function is called, which loads more venues and adds them to the list.

The implementation is as follows:

1.  The `ListView` component receives the list of venues and the `onLoadMore` function as props.
2.  It then uses the `useInView` hook to create a ref that is attached to a `div` at the bottom of the list.
3.  When the `div` comes into view, the `inView` state is set to true, which triggers a `useEffect` hook that calls the `onLoadMore` function.

This approach ensures that the list remains fast and responsive, even when there are a large number of venues to display.

### 4.7. UI Components

The application features a number of custom UI components that are designed to provide a rich and interactive user experience. The following is a detailed overview of the most important UI components:

#### 4.7.1 Custom Map

The application features a custom map that is designed to be clean, simple, and on-brand. The map is defined in the `MapView.tsx`.

##### 4.7.1.1 Map Coloring

The map coloring is designed to be subtle and unobtrusive, with a focus on highlighting the important information. The `mapStyles` object in the `MapView.tsx` file defines the following styles:

*   **Saturation**: The saturation of the map is reduced to -85, which gives the map a desaturated and modern look.
*   **Hue**: The hue of the map is set to `#00ffc3`, which gives the map a subtle green tint.

##### 4.7.1.2 Marker Icon

The marker icon is a custom SVG icon. The icon is defined in the `public/marker.svg` file and is applied to the markers using the `icon` property of the `google.maps.Marker` class.

The `MarkerClustererComponent` in the `MapView.tsx` file is responsible for creating the markers and setting the icon. The icon is scaled to a size of 27x31 pixels.

##### 4.7.1.3 Map Marker Popup

When a user hovers over a marker on the map, a small pop-up appears with the name and address of the venue. This provides a quick and easy way for users to get more information about a venue without having to click on it.

The map marker pop-up is implemented using the `InfoWindow` component from the `@vis.gl/react-google-maps` library. The `MarkerClustererComponent` in the `MapView.tsx` file is responsible for creating the `InfoWindow` and managing its state.

The implementation is as follows:

1.  The `MarkerClustererComponent` uses the `useState` hook to create a `infoWindowVenue` state variable, which is used to store the venue that should be displayed in the `InfoWindow`.
2.  When the user hovers over a marker, the `mouseover` event is fired, which calls the `setInfoWindowVenue` function to set the `infoWindowVenue` state to the current venue.
3.  The `InfoWindow` component is rendered if the `infoWindowVenue` state is not null. The `InfoWindow` is positioned relative to the marker and displays the `VenueInfoBox` component, which contains the name and address of the venue.
4.  When the user moves the mouse off the marker, the `mouseout` event is fired, which calls the `setInfoWindowVenue` function to set the `infoWindowVenue` state to null. This hides the `InfoWindow`.

#### 4.7.2. Grid/List View Switch

The grid/list view switch allows users to toggle between a grid and a list view of the venues. The `ViewToggle` component is a reusable UI component that is used in the `Home` component. When a user clicks the button, the `setViewMode` function is called, which is passed as a prop from the `useVenueState` hook.

The implementation is as follows:

1.  The `ViewToggle` component receives the `viewMode` and `setViewMode` function as props.
2.  It then renders two buttons, one for the grid view and one for the list view.
3.  When a user clicks one of the buttons, the `setViewMode` function is called with the selected view mode.

This approach ensures that the user can easily switch between the two view modes, and it provides a seamless and intuitive user experience.

#### 4.7.3. ListView and Grid Layout

The `ListView` component is responsible for rendering the list of sports venues. It's a flexible component that can display the venues in either a standard vertical list or a two-column grid, depending on the `viewMode` prop it receives.

The implementation is as follows:

1.  The `ListView` component receives the `venues` to display, the current `viewMode` ('list' or 'grid'), and event handlers like `onVenueSelect` and `onLoadMore`.
2.  It maps over the `venues` array and renders a `VenueCard` component for each venue.
3.  Conditional styling is applied based on the `viewMode`. If the mode is 'grid', a `grid grid-cols-2 gap-4` class is applied to the main container, arranging the venue cards into a two-column grid. Otherwise, no special class is applied, and the cards render as a standard block-level list.
4.  This component also works with the `react-intersection-observer` library to trigger the `onLoadMore` function for lazy loading, as described in the Performance Optimizations section.

#### 4.7.4. Venue Card

The `VenueCard` component is a reusable UI component that displays a summary of a single sports venue. It is used in the `ListView` component to render each venue in the list.

The implementation is as follows:

1.  The `VenueCard` component receives the `venue` object and event handlers like `onSelect` and `onViewLocationClick` as props.
2.  It then renders the venue's main photo, name, and address.
3.  It also renders the `ViewLocationButton` component, which allows users to view the venue's location on the map.
4.  When a user clicks on the card, the `onSelect` function is called, which is used to open the venue popup.

#### 4.7.5 View Location Button

The "View Location" button allows users to quickly and easily view the location of a venue on the map.

The `ViewLocationButton` component is a reusable UI component that is used in the `VenueCard` component. When a user clicks the button, the `onViewLocationClick` function is called, which is passed as a prop from the `Home` component.

The `Home` component defines the `handleViewLocationClick` function, which is responsible for centering the map on the selected venue and displaying an info window with the venue's details.

The implementation is as follows:

1.  The `handleViewLocationClick` function receives the `venue` object as an argument.
2.  It then calls the `setMapCenter` function to set the center of the map to the venue's latitude and longitude.
3.  It then calls the `setZoom` function to set the zoom level of the map to 15, which is a good zoom level for viewing a single venue.
4.  Finally, it calls the `setInfoWindowVenue` function to set the `infoWindowVenue` state to the selected venue, which displays an info window with the venue's details.

#### 4.7.6. Venue Popup Window

The venue popup window displays detailed information about a selected venue. The `VenuePopup` component is a reusable UI component that is used in the `Home` component. When a user clicks on a venue in the list or on the map, the `setSelectedVenue` function is called, which is passed as a prop from the `useVenueState` hook.

The implementation is as follows:

1.  The `VenuePopup` component receives the `venue` and `onClose` function as props.
2.  It then renders a modal window with the venue's details, such as the name, address, phone number, and website.
3.  When a user clicks the close button, the `onClose` function is called, which sets the `selectedVenue` state to null and closes the popup.

##### 4.7.6.1. Venue Image URL Processing

The application includes a utility function for processing image URLs. The `processImageUrl` function in the `utils/imageUrl.ts` file is responsible for replacing any `loremflickr.com` URLs with `picsum.photos` URLs. This is necessary because the `loremflickr.com` service is down.

The implementation is as follows:

1.  The `processImageUrl` function receives the image URL as an argument.
2.  It then checks if the URL contains the string "loremflickr.com".
3.  If it does, it returns a new URL that points to a `picsum.photos` image.
4.  Otherwise, it returns the original URL.

#### 4.7.7. Filters

The filters allow users to filter the venues by city and type. The `FilterControls` component is a reusable UI component that is used in the `Home` component. When a user enters a city or selects a type, the `setCityFilter` or `setTypeFilter` function is called, which is passed as a prop from the `useVenueState` hook.

The implementation is as follows:

1.  The `FilterControls` component receives the `cityFilter`, `setCityFilter`, `typeFilter`, `setTypeFilter`, and `types` as props.
2.  It then renders an input field for the city filter and a custom select component for the type filter.
3.  When a user enters a city or selects a type, the `setCityFilter` or `setTypeFilter` function is called with the selected value.

The actual filtering logic is handled within the `useVenueState` hook. A `useEffect` hook listens for changes to the `cityFilter` and `typeFilter` state variables. When a change is detected, it filters the original `venues` array based on the current filter values and updates the `filteredVenues` state.

#### 4.7.8. Header with Main Menu

The `Header` component is a reusable UI component that is used in the `RootLayout` component. It displays the logo and a list of navigation links.

The implementation is as follows:

1.  The `Header` component uses the `NavLink` component to render the navigation links.
2.  The `NavLink` component uses the `usePathname` hook from Next.js to determine if the link is active.
3.  If the link is active, it is styled with a blue color and a blue underline to indicate that it is the current page.

## 5. Building, Running, and Testing

This section provides practical instructions on how to get the project up and running on a local machine.

### 5.1. Prerequisites

Before you begin, ensure you have the following installed on your system:
*   **Node.js**: A JavaScript runtime environment. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm**: A package manager for Node.js, which is included with the Node.js installation.

### 5.2. Installation

To install the project's dependencies, navigate to the `frontend` directory in your terminal and run the following command:

```bash
npm install
```
This command will download and install all the necessary libraries and frameworks listed in the `package.json` file.

### 5.3. Running the Application

To run the application in development mode, use the following command from the `frontend` directory:

```bash
npm run dev
```
This will start a local development server, typically on `http://localhost:3000`. The application will automatically reload if you make any changes to the code.

### 5.4. Building for Production

To create an optimized production build of the application, run the following command from the `frontend` directory:

```bash
npm run build
```
This will create a `build` directory with all the optimized assets for the application.

### 5.5. Running Tests

To run the test suite for the application, use the following command from the `frontend` directory:

```bash
npm test
```
This will run all the unit, integration, accessibility, and performance tests for the application and provide a summary of the results.

## 6. Understanding `package.json`

The `package.json` file is the heart of any Node.js project. It contains metadata about the project and defines the scripts and dependencies that are used to build, run, and test the application.

### 6.1. `scripts`

The `scripts` section defines a set of commands that can be run using `npm run <script-name>`. The most important scripts in this project are:

*   **`dev`**: Starts the Next.js development server.
*   **`build`**: Creates an optimized production build of the application.
*   **`start`**: Starts the production server after a build has been created.
*   **`lint`**: Runs the linter to check for code quality and consistency.
*   **`test`**: Runs the test suite using Jest.

### 6.2. `dependencies`

The `dependencies` section lists all the libraries and frameworks that are required for the application to run in production. The key dependencies in this project are:

*   **`next`**, **`react`**, **`react-dom`**: The core libraries for the Next.js and React framework.
*   **`@vis.gl/react-google-maps`**, **`@googlemaps/markerclusterer`**: Used to display the interactive map and cluster the markers.
*   **`swr`**: Used for data fetching and caching.
*   **`zod`**: Used for data validation.

### 6.3. `devDependencies`

The `devDependencies` section lists all the libraries and frameworks that are only required for development and testing. The key devDependencies in this project are:

*   **`typescript`**, **`@types/...`**: Used for TypeScript support.
*   **`tailwindcss`**, **`postcss`**, **`autoprefixer`**: Used for styling the application.
*   **`jest`**, **`@testing-library/react`**, **`jest-axe`**, **`axe-core`**: Used for testing the application.
*   **`eslint`**: Used for linting the code.
