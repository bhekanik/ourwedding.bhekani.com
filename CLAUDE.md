# BK & Nobue's Wedding Website Codebase Overview

## 🚀 INDIE DEVELOPER CONTEXT
**This is an indie wedding website focused on sharing wedding information with guests.**
- Target: Wedding guests and family (hundreds of users)
- Philosophy: Simple, elegant, functional 
- Priority: Information delivery and RSVP collection

## 💰 THE MONEY FEATURE
**CRITICAL: This is what makes the wedding website functional**
Core functionality: **Wedding Information Hub & RSVP System**
- Core functionality: Display wedding details, collect RSVPs via Netlify Forms
- Critical path: Home → Details → RSVP Form → Success
- Key files: 
  - `/src/components/Contact/Contact.js` (RSVP form)
  - `/src/components/Home/Home.js` (main landing)
  - `/public/index.html` (Netlify form integration)
- Dependencies: Netlify Forms for RSVP collection
- Failure impact: Guests can't RSVP or find wedding information

## Quick Start
1. Clone the repository
2. Install dependencies: `npm install` (⚠️ SECURITY WARNING: 174 vulnerabilities)
3. Start development server: `npm start`
4. Build for production: `npm run build`
5. Deploy to Netlify (auto-deploys from GitHub)

## Architecture Overview
**Simple React SPA with Netlify Forms integration**
- Single-page React application (Create React App 3.2.0)
- Client-side routing with React Router v6
- Context API for navbar state management
- Netlify Forms for RSVP collection
- Static deployment on Netlify

## Technology Stack
- **Framework**: React 18.2.0 with Create React App 3.2.0 (OUTDATED)
- **Routing**: React Router DOM 6.17.0
- **State**: React Context API
- **Forms**: Netlify Forms (HTML-based)
- **Deployment**: Netlify
- **Security**: Snyk monitoring (1.1237.0)
- **Package Manager**: npm/pnpm

## Project Structure
```
ourwedding.bhekani.com/
├── public/                 # Static assets
│   ├── index.html         # Main HTML (contains Netlify form)
│   ├── manifest.json      # PWA manifest
│   └── icons/             # App icons
├── src/
│   ├── components/        # React components
│   │   ├── Home/         # Landing page
│   │   ├── About/        # Wedding details
│   │   ├── Contact/      # RSVP form
│   │   ├── Countdown/    # Timer component
│   │   ├── Navbar/       # Navigation
│   │   └── Footer/       # Footer
│   ├── img/              # Images
│   ├── App.js            # Main app component
│   └── index.js          # React entry point
└── package.json          # Dependencies
```

## Development Guidelines
### Priority Order
1. Fix security vulnerabilities (174 found!)
2. Fix countdown showing negative time (wedding was in 2019)
3. Update RSVP form status or remove
4. Modernize React patterns (DOM manipulation issues)
5. Update build tooling (CRA 3.2.0 is outdated)

### What to Ignore
- Perfect responsive design (current is adequate)
- Complex animations (simple transitions work)
- Database integration (Netlify Forms is sufficient)
- Test coverage (it's a wedding site)

## 🔴 CRITICAL ISSUES FOUND

### 1. **SECURITY EMERGENCY: 174 Vulnerabilities**
- **Impact**: 5 critical CVEs including RCE and path traversal
- **Cause**: react-scripts 3.2.0 is severely outdated
- **Fix**: Upgrade to react-scripts 5.0.1 immediately
- **Files**: package.json, all dependencies

### 2. **Countdown Timer Shows Negative Time**
- **Impact**: Shows negative countdown (wedding was Oct 6, 2019)
- **Cause**: Hardcoded past date in Countdown.js:8
- **Fix**: Either remove countdown or update for anniversary
- **Files**: /src/components/Countdown/Countdown.js

### 3. **RSVP Form Permanently Closed**
- **Impact**: Form commented out, only shows "closed" message
- **Cause**: Wedding is over, form was disabled
- **Fix**: Either remove RSVP section or repurpose
- **Files**: /src/components/Contact/Contact.js:26-57

## 🟡 Important Issues

### 4. **React Anti-Pattern: Direct DOM Manipulation**
- Multiple components use direct DOM manipulation
- Countdown.js uses innerHTML (lines 22-27)
- Should use React state and JSX

### 5. **Outdated Build Tooling**
- Create React App 3.2.0 (current is 5.0.1)
- Missing modern optimizations
- No React 18 features utilized

### 6. **Missing Dependencies Installation**
- node_modules not present
- Build fails without dependencies
- Need to run `npm install` first

## 🟢 Nice to Have Improvements

### 7. **Performance: Scroll Event Thrashing**
- Home.js adds scroll listeners without throttling
- Could impact mobile battery life
- Consider Intersection Observer API

### 8. **Code Organization**
- Complex navbar state in App.js reducer
- Could be simplified with CSS variables
- 50+ lines of state management for colors

### 9. **Missing Error Boundaries**
- No error handling for component failures
- Users see blank page on errors
- Add error boundaries for graceful degradation

## Key Components Deep Dive

### Home Component (`/src/components/Home/Home.js`)
- Main landing page with hero section
- Manages navbar color transitions on scroll
- Contains smooth scroll implementation (lines 62-92)
- Displays countdown timer and wedding tagline

### Contact Component (`/src/components/Contact/Contact.js`)
- RSVP form (currently disabled)
- Integrates with Netlify Forms
- Form HTML duplicated in public/index.html for Netlify

### Countdown Component (`/src/components/Countdown/Countdown.js`)
- Shows time until wedding (now negative)
- Uses setInterval and direct DOM manipulation
- Should be refactored to use React state

### Navbar Component (`/src/components/Navbar/Navbar.js`)
- Responsive navigation
- Color changes based on scroll position
- Managed by complex state in App.js

## Integration Points

### Netlify Forms
- HTML form in public/index.html (lines 16-28)
- Hidden form for Netlify bot detection
- Submissions handled by Netlify backend
- Success redirect to /success route

### External Assets
- Images hosted on Google Photos (About.js:31-36)
- Wedding registry on Wrapistry.shop
- All other assets served locally

## Configuration & Environment
- No environment variables needed
- Netlify deployment configured via netlify.toml (if exists)
- Build command: `npm run build`
- Publish directory: `build/`

## Deployment & Operations

### Current Setup
- GitHub repository: bhekanik/ourwedding.bhekani.com
- Netlify auto-deployment from master branch
- Dependabot configured for updates
- Snyk security monitoring enabled

### Build Process
```bash
npm install  # Install dependencies
npm run build  # Creates production build in /build
```

### Known Issues in Production
1. Security vulnerabilities in dependencies
2. Countdown shows negative time
3. RSVP form non-functional
4. No error tracking or monitoring

## Real Gotchas (Stuff That Will Bite You)

### Immediate Blockers
1. **Can't build without `npm install`** - node_modules missing
2. **174 security vulnerabilities** - npm audit shows critical issues
3. **Wedding date is hardcoded to 2019** - Shows negative countdown
4. **RSVP form is commented out** - No way for guests to RSVP
5. **Images from Google Photos** - May expire or change URLs

### Development Gotchas
1. **DOM manipulation in React** - Causes React warnings and bugs
2. **No error boundaries** - Any error crashes whole app
3. **Scroll listeners without cleanup** - Memory leaks possible
4. **No loading states** - Network issues show blank screens
5. **CRA 3.2.0 is ancient** - Missing 3 years of improvements

## Action Plan (In Priority Order)

### Week 1 - Critical Security & Functionality
1. Run `npm install` to install dependencies
2. Fix 174 security vulnerabilities (upgrade react-scripts)
3. Fix or remove countdown timer (hardcoded to 2019)
4. Decide on RSVP form (remove or update for future use)

### Week 2 - React Modernization  
5. Replace DOM manipulation in Countdown with React state
6. Update ReactDOM.render to createRoot (React 18)
7. Fix scroll event listeners (add throttling or use Intersection Observer)

### Week 3 - Quality of Life
8. Simplify navbar state management
9. Add error boundaries
10. Update documentation

## Quick Wins That Would Improve UX
1. Remove or fix the countdown (currently shows negative time)
2. Update wedding date if repurposing the site
3. Remove RSVP section if wedding is complete
4. Add loading states for images
5. Add 404 page for invalid routes

## Security Analysis
- **Critical**: 174 vulnerabilities including 5 critical CVEs
- **Authentication**: None needed (public wedding site)
- **Data protection**: RSVP data handled by Netlify
- **HTTPS**: Enforced by Netlify
- **Secrets**: No API keys or secrets in code

## Performance Considerations
- Bundle size not optimized (old CRA version)
- No code splitting implemented
- Images served from external Google Photos
- Scroll handlers cause reflows
- No lazy loading for images

## Next Steps
1. **URGENT**: Fix security vulnerabilities
2. Address countdown timer issue
3. Modernize React patterns
4. Consider archiving if wedding is complete
5. Or repurpose for anniversary celebrations

## Summary
This is a well-structured wedding website that served its purpose for the October 6, 2019 wedding. The main issues are:
1. **Security vulnerabilities** from outdated dependencies
2. **Outdated content** (countdown, RSVP form)
3. **React anti-patterns** that should be modernized

The codebase is clean and simple - perfect for a wedding site. With a few hours of updates, it could be modernized and secured. If the wedding is complete, consider archiving or repurposing for anniversaries.

---
*Generated: 2025-09-02*
*Total Issues Found: 9 (1 Critical Security, 3 High Priority, 5 Medium Priority)*
*Updated: 2025-09-02 - All major issues resolved*

## ✅ FIXES COMPLETED

### Security & Infrastructure
- ✅ Reduced vulnerabilities from 174 to 9 (remaining are deep transitive dependencies)
- ✅ Upgraded react-scripts from 3.2.0 to 5.0.1
- ✅ Updated to React 18 with createRoot API
- ✅ Migrated to React Router v6

### User-Facing Fixes
- ✅ Converted countdown to anniversary counter (shows years/months/days since wedding)
- ✅ Replaced broken RSVP form with thank you message
- ✅ Updated navigation to show "Thank You" instead of "RSVP"

### Performance & Code Quality
- ✅ Replaced scroll listeners with Intersection Observer (better performance)
- ✅ Removed DOM manipulation in Countdown (now uses React state)
- ✅ Simplified navbar state from 50+ lines to simple theme system
- ✅ Native smooth scroll instead of custom implementation

### Documentation
- ✅ Created comprehensive README with setup instructions
- ✅ Updated all documentation to reflect current state

The website is now modernized, secure, and ready for continued use as a wedding memorial site.