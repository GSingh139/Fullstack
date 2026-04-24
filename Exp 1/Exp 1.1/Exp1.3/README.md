# Admin Dashboard - Full Stack Application

A responsive admin dashboard built with CSS Grid layout and dynamic theme switching functionality.

## Features

- ✅ CSS Grid-based responsive layout
- ✅ Dark/Light mode toggle with localStorage persistence
- ✅ CSS Variables for theme management
- ✅ System preference detection (`prefers-color-scheme`)
- ✅ RESTful API backend with Express.js
- ✅ Responsive design for mobile devices

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
Exp1.3/
├── index.html          # Main HTML structure
├── styles.css          # CSS with Grid layout and variables
├── script.js           # Theme switching and localStorage logic
├── server.js           # Express backend server
├── package.json        # Dependencies
└── README.md          # This file
```

## API Endpoints

- `GET /api/stats` - Get dashboard statistics
- `GET /api/transactions` - Get all transactions
- `GET /api/transactions/:id` - Get specific transaction
- `POST /api/transactions` - Create new transaction
- `PUT /api/stats` - Update statistics

## Key Concepts Demonstrated

1. **CSS Grid Template Areas**: Layout using named grid areas
2. **CSS Variables**: Theme management with custom properties
3. **localStorage**: Persisting user theme preference
4. **prefers-color-scheme**: System theme detection
5. **Responsive Design**: Mobile-first approach with media queries

## Viva Voice Questions Answers

1. **What advantages do CSS variables provide?**
   - Dynamic theming without duplicating code
   - Easy theme switching with a single property change
   - Better maintainability and consistency
   - Runtime value changes without recompilation

2. **How does localStorage differ from cookies?**
   - localStorage stores data locally in browser (no expiration unless cleared)
   - Cookies are sent with every HTTP request (larger overhead)
   - localStorage has larger storage capacity (~5-10MB vs ~4KB)
   - localStorage is simpler API (setItem/getItem vs document.cookie)
   - Cookies can be set to expire; localStorage persists until manually cleared

3. **Explain CSS Grid template areas**
   - Named grid areas that define layout structure
   - Use `grid-template-areas` to define visual layout
   - Items are placed using `grid-area` property
   - Makes responsive design easier with media queries

4. **How would you implement mobile navigation?**
   - Add hamburger menu button
   - Toggle sidebar visibility with JavaScript
   - Use CSS transforms/transitions for slide-in effect
   - Close menu on link click or outside click
   - Adjust grid layout for mobile (hide sidebar, full-width main)

5. **What's the purpose of prefers-color-scheme?**
   - Media query that detects user's system theme preference
   - Allows websites to automatically match OS theme
   - Improves user experience and reduces eye strain
   - Can be used in CSS: `@media (prefers-color-scheme: dark)`
