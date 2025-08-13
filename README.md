# Na Poti - Landing Page

A modern, responsive landing page for the "Na Poti" mobile app built with React and Vite.

## Overview

This is a single-page website designed to introduce the Na Poti mobile app, provide download links to the App Store, and host the required Privacy Policy page for app submission.

## Features

- **Modern Design**: Dark-themed with cyan/blue and purple accents matching the app's aesthetic
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Two-Page Structure**: 
  - Main landing page (`/`)
  - Privacy Policy page (`/privacy`)
- **React Router**: Client-side routing for smooth navigation
- **CSS Animations**: Subtle animations and hover effects for enhanced user experience

## Tech Stack

- **React 19.1.1** - Frontend framework
- **React Router DOM** - Client-side routing
- **Vite 7.1.2** - Build tool and development server
- **CSS3** - Styling with modern features (gradients, flexbox, grid)

## Getting Started

### Prerequisites

- Node.js (version 20.19.0 or higher recommended)
- npm

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd NaPoti_landing_page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── LandingPage.jsx       # Main landing page component
│   ├── LandingPage.css       # Landing page styles
│   ├── PrivacyPolicy.jsx     # Privacy policy page component
│   └── PrivacyPolicy.css     # Privacy policy styles
├── App.jsx                   # Main app component with routing
├── App.css                   # Global reset and base styles
├── index.css                 # Root styles
└── main.jsx                  # App entry point
```

## Customization

### Adding Your Logo and Background

To add your app's logo and background image:

1. Replace the SVG placeholder in `LandingPage.jsx` with your actual logo
2. Update the background gradient in `LandingPage.css` to use your background image
3. Adjust colors in the CSS files to match your brand

### Updating Privacy Policy

The Privacy Policy includes placeholder text like `[Your Contact Email]` and `[Date]`. Update these with your actual information before deploying.

### App Store Link

Update the App Store button href in `LandingPage.jsx` with your actual App Store URL once your app is published.

## App Information

**Na Poti** - "Vaša vozila, na dlani!" (Your vehicles, in the palm of your hand!)

A comprehensive vehicle expense tracking app that supports:
- Fuel filling and charging session tracking
- Support for all vehicle types (petrol, diesel, hybrid, electric)
- Fuel station overview in Slovenia

## Developer

Created by Enej Licina

## License

This project is private and proprietary.