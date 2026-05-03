# Pets Frontend 🐶

A React single-page app for browsing pet profiles, filtering results, and viewing pet details.

## Tech stack

- React 17 with `react-router-dom` 6
- CRACO + Create React App (`react-scripts` 4)
- Sass (`.scss`) with shared mixins/variables injected by `craco.config.js`
- Axios for API requests
- Fuse.js for fuzzy search
- Jest + React Testing Library for component tests

## Features

- Pet listing page with:
  - fuzzy search
  - species filter (Cat / Dog)
  - sort by latest added
- "Pets directory" banner that navigates to available pets only
- Pet detail page for a selected pet card
- Responsive header logo behavior using `useCheckMobile`

## Routes

- `/` - home page with filters and search
- `/availablePets` - available pets view
- `/pets/:petId` - pet detail page

## Data source

The app uses a local mock dataset in `src/api/api.json`.

`src/api/fetchData.js` simulates an API call by returning the `pets` list asynchronously (`Promise.resolve`), so no external endpoint is required.

## Getting started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm start
```

App runs at [http://localhost:3000](http://localhost:3000).

### Run tests

```bash
npm test
```

### Build for production

```bash
npm run build
```

Production output is generated in `build/`.

## Available scripts

- `start` - start dev server through CRACO
- `build` - create production build
- `test` - run test runner
- `lint-staged` - run lint-staged checks
- `plop` - generate component scaffolding templates

## Notes

- Routing to `/availablePets` and `/pets/:petId` currently relies on navigation state. Opening those URLs directly in a fresh tab may not include the expected data unless state is reloaded in-code.

