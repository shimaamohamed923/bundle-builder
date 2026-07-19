# Bundle Builder

A React application for building a custom home security bundle.

## Live Demo

🔗 https://bundle-builder-rouge.vercel.app/

## Repository

🔗 https://github.com/shimaamohamed923/bundle-builder

## Tech Stack

- React 19
- Redux Toolkit
- Tailwind CSS v4
- Axios
- Vite

## Getting Started

### Requirements

- Node.js 20+ (tested with Node.js v22.14.0)
- npm

### Installation

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

- Data-driven UI from a local JSON file.
- Multi-step bundle builder.
- Product variant selection.
- Quantity management per variant.
- Live review panel.
- Save configuration using Local Storage.
- Responsive layout for desktop and mobile devices.

## Project Structure

```text
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
- Stored quantity per product variant so each variant preserves its own quantity when switching between options.
- Extracted business logic (selection, quantity, pricing, etc.) into utility functions to keep components focused on rendering.
- Product data is loaded from a local JSON file.
- Saved configurations are restored from Local Storage after using the **Save for later** feature.

## Tradeoffs

- Local Storage is used for persistence instead of a backend service.
- The project focuses on the required functionality and clean architecture rather than additional UI animations.

## Future Improvements

- Add automated unit tests.
- Improve accessibility.
- Add smooth accordion animations.
- Optimize rendering for larger product catalogs.
- Integrate a backend API instead of using a local JSON file.
