# Bundle Builder

A React application for building a custom home security bundle.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![JSX](https://img.shields.io/badge/JSX-323330?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

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

### Clone the repository

```bash
git clone https://github.com/shimaamohamed923/bundle-builder.git
```

### Navigate to the project

```bash
cd bundle-builder
```

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

## Refactoring

The project was refactored with the assistance of AI to improve code quality, maintainability, and component structure.

The refactoring included:

Extracting reusable Redux selectors for derived state and calculations.
Reducing prop drilling across product-related components.
Creating a reusable useProductActions custom hook for Redux dispatch logic.
Removing duplicated and unused code.
Improving shared utility functions such as currency formatting.
Fixing React rendering and safety issues, including duplicate keys and missing variant guards.
Preserving the existing application behavior while improving the overall code structure.

All refactoring changes were reviewed and validated to ensure they integrate correctly with the existing application.

## Future Improvements

- Add automated unit tests.
- Improve accessibility.
- Add smooth accordion animations.
- Optimize rendering for larger product catalogs.
- Integrate a backend API instead of using a local JSON file.
