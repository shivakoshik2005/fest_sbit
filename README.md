# AAROHAN 2026 - SBIT College Fest Website

A production-ready, responsive college fest website for "Swarna Bharathi Institute of Science and Technology (SBIT)" titled "AAROHAN 2026".

## Features

- 🎨 Modern Glassmorphism Design
- 📱 Fully Responsive (Mobile, Tablet, Desktop)
- 🚀 Fast Performance with React + Vite
- 🎭 Smooth Animations with Framer Motion
- 🎯 Easy Customization through Static Data

## Tech Stack

- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS v3
- **Routing:** React Router DOM v6
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd fest
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

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` folder.

## Deployment to GitHub Pages

1. Install gh-pages as a dev dependency (already included):

```bash
npm install gh-pages --save-dev
```

2. Update the `package.json` homepage field:

```json
"homepage": "https://yourusername.github.io/repo-name"
```

3. Deploy:

```bash
npm run deploy
```

Or manually:

```bash
npm run build
npx gh-pages -d dist
```

## Customization

### Changing Content

All website content is stored in `src/data/content.js`. You can modify:

- **College Information:** Edit `collegeInfo` object
- **About Content:** Edit `aboutContent` object  
- **Events:** Edit the `events` array with your events
- **Gallery Images:** Edit `galleryImages` array
- **Contact Info:** Edit `contactInfo` object

### Adding/Modifying Events

In `src/data/content.js`, each event has:

```javascript
{
  id: 1,
  name: "Event Name",
  banner: "https://url-to-banner-image",
  description: "Event description",
  image: "https://url-to-image",
  icon: "https://url-to-icon",
  contests: [
    {
      id: 1,
      name: "Contest Name",
      poster: "https://url-to-poster",
      description: "Contest description",
      rules: "Contest rules",
      registerLink: "https://google-form-url"
    }
  ]
}
```

### Changing Images

All images use external URLs. You can replace them with:

1. **Unsplash Images:** Visit [unsplash.com](https://unsplash.com) and copy image URLs
2. **Your Own Images:** Upload to any image hosting service and use the URL
3. **Local Images:** Place images in `public/` folder and reference as `/image-name.jpg`

## Project Structure

```
/fest
├── index.html          # Main HTML file
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── README.md           # This file
├── public/            # Static assets
│   └── favicon.svg    # Website favicon
└── src/
    ├── main.jsx       # React entry point
    ├── App.jsx        # Main App component with routing
    ├── index.css      # Global styles and Tailwind
    ├── components/    # Reusable components
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── GlassCard.jsx
    │   ├── EventCard.jsx
    │   └── ContestCard.jsx
    ├── pages/         # Page components
    │   ├── Home.jsx
    │   ├── Events.jsx
    │   ├── EventDetails.jsx
    │   └── Gallery.jsx
    └── data/          # Static data
        └── content.js # All website content
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes.

---

Built with ❤️ by SBIT

