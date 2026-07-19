# Bundle Builder

A React application for building a custom home security bundle.

## Live Demo

🔗 https://your-project.vercel.app

## Tech Stack

- React 19
- Redux Toolkit
- Tailwind CSS v4
- Axios
- Vite

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Features

- Data-driven UI from a JSON source
- Multi-step bundle builder
- Product variant selection
- Quantity management per variant
- Live review panel
- Save configuration to Local Storage
- Responsive layout

## Project Structure

```
src/
├── components/
├── store/
├── data/
├── utils/
├── Helpers/
└── assets/
```

## Decisions

- Used Redux Toolkit for centralized state management.
- Stored quantity per product variant to preserve quantities independently when switching between variants.
- Extracted business logic into utility functions to keep components focused on rendering.
- Loaded product data from a JSON source.
- Restored saved configurations from Local Storage.

## Tradeoffs

- Local Storage is used instead of a backend for persistence.
- The project focuses on the required functionality without additional animations.

## Future Improvements

- Add unit tests.
- Improve accessibility.
- Add accordion animations.
- Optimize rendering for larger datasets.
