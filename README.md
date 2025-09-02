# BK & Nobue's Wedding Website

A beautiful wedding website built with React to celebrate BK & Nobue's special day (October 6, 2019). Now serves as a memorial of their wedding celebration.

## Features

- 📅 Anniversary counter showing time since the wedding
- 📍 Wedding venue and ceremony details  
- 👰🤵 Wedding party information
- 💌 Thank you message to guests
- 📱 Fully responsive design
- 🎨 Elegant animations and parallax effects

## Getting Started

### Prerequisites

- Node.js 14+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bhekanik/ourwedding.bhekani.com.git
cd ourwedding.bhekani.com
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## Deployment

The site is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build/`
4. Deploy!

## Technology Stack

- **React 18.2** - UI framework
- **React Router 6** - Client-side routing
- **Create React App 5.0.1** - Build tooling
- **CSS3** - Styling with custom properties
- **Netlify** - Hosting and deployment

## Project Structure

```
src/
├── components/
│   ├── Home/          # Landing page with hero section
│   ├── About/         # Wedding details and information
│   ├── Contact/       # Thank you message (formerly RSVP)
│   ├── Countdown/     # Anniversary counter
│   ├── Navbar/        # Navigation with scroll effects
│   └── Footer/        # Site footer
├── img/               # Images and assets
├── App.js             # Main app component
└── index.js           # React entry point
```

## Recent Updates (2025)

- ✅ Fixed 174 security vulnerabilities
- ✅ Upgraded to React 18 and CRA 5.0.1
- ✅ Converted countdown to anniversary counter
- ✅ Replaced RSVP form with thank you message
- ✅ Improved performance with Intersection Observer
- ✅ Simplified state management
- ✅ Modernized React patterns

## Development

### Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from CRA (one-way operation)

### Code Style

The project uses:
- Modern React hooks and functional components
- CSS modules for component styling
- Semantic HTML5 markup
- Responsive design patterns

## License

Private repository - All rights reserved

## Contact

For questions about this codebase, please open an issue on GitHub.

---

*Made with ❤️ to celebrate BK & Nobue's wedding*