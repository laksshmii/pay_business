<!-- Installation -->
# Pay Business Dashboard

A React-based dashboard application built with **Webpack** and **styled-components** for styling.  
The app follows a modular folder structure (`components`, `pages`, `router`, etc.) for scalability and maintainability.

---

## 🚀 Setup Instructions

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd pay_business

Clone or download the project files

Navigate to the project directory

Install dependencies:

<!-- bash -->
npm install
Running the Application
<!-- bash -->
npm start
The application will open in your browser at http://localhost:3000.

<!-- Webpack Configuration Notes -->
Your Webpack build is working successfully as shown by the output:

Main bundle: ~598 KiB

CSS bundle: ~8.5 KB

<!-- Project Architecture & Approach -->

React (functional components + hooks):
All UI and business logic are handled via modular React components inside src/components and src/pages.

Styled-components:
CSS-in-JS approach is used for styling, providing scoped styles and theme support.

<!-- Webpack: -->
Configured for bundling React + JavaScript + CSS.
From the sample build output:

Main bundle: ~598 KiB

CSS bundle: ~8.5 KiB

<!-- Folder Structure: -->

src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable UI components
├── layout/          # Layout-related components (wrappers, headers, etc.)
├── pages/           # Page-level components (Dashboard, Profile, QR, etc.)
├── router/          # App routing logic
├── types/           # Type definitions / interfaces (if any)
├── App.js           # Root component

<!-- ⏱️ Time Spent -->

Initial project setup (Webpack, React, styled-components): 1–2 hrs

Component & layout structure: 3–4 hrs

Styling & theming: 2–3 hrs

Debugging build + testing: 1 hr

Total estimated time: ~7–10 hrs

<!-- ⚠️ Known Limitations -->

Bundle size can be further optimized using code splitting and lazy loading.

No unit tests are currently included (can be added with Jest + React Testing Library).

API integration (if any) is not shown in this version.

Theme system for styled-components is basic; can be extended for dark/light modes.

