# Recipe Keeper App - AI Agent Instructions

## Project Overview
Recipe Keeper is a Progressive Web App (PWA) that allows users to manage their recipes with offline support. The app is built using vanilla JavaScript, HTML, and CSS with a focus on client-side storage.

## Architecture & Components

### Core Files
- `recipekeeperv3.html`: Single-page application containing all app logic and UI
- `manifest.json`: PWA configuration and metadata
- `sw.js`: Service Worker for offline capabilities and caching

### Data Structure
Recipes are stored as objects with the following schema:
```javascript
{
  title: string,
  category: string,
  ingredients: string,
  instructions: string,
  photo: string // Base64 encoded image data
}
```

### Key Design Patterns
1. **Local Storage**: All recipes are persisted in `localStorage` under the key 'recipesData'
2. **Image Handling**: Photos are automatically resized to max width 800px and stored as base64 JPEG
3. **UI Components**: Recipe cards use CSS transforms for visual interest (random rotation)

## Development Workflows

### Adding New Features
1. All app logic resides in `recipekeeperv3.html`
2. Update cache version in `sw.js` when adding new assets
3. Images should use the `resizeImage()` utility for optimization

### PWA Considerations
- Add new static assets to `urlsToCache` array in `sw.js`
- Test offline functionality after changes
- Maintain responsive design (see media queries)

## Project Conventions

### Styling
- Font families: 'Indie Flower' for headings, 'Poppins' for body text
- Color scheme: Defined in CSS variables and categoryColors array
- Cards use consistent border-radius (15px) and box-shadow patterns

### JavaScript Patterns
- Event handlers use arrow functions for consistency
- Modal state is managed through DOM manipulation
- Categories are dynamically generated from existing recipes

## Integration Points
- Service Worker handles caching and offline functionality
- localStorage API for data persistence
- File API for image handling
- Google Fonts for typography

For any modifications, ensure maintaining the existing responsive design and offline-first approach.