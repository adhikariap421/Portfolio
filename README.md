# Portfolio React Application

A modern, responsive portfolio web application built with React, TypeScript, and Vite.

## Features

- **Responsive Design** - Mobile-first approach with beautiful layouts
- **Modern Components** - Hero section, Projects showcase, Skills display, Contact form
- **Smooth Navigation** - Sticky header with smooth scrolling
- **Interactive Elements** - Hover effects and animations
- **Contact Form** - Functional contact form with validation
- **SEO Friendly** - Proper meta tags and semantic HTML

## Sections

1. **Header** - Navigation menu with mobile support
2. **Hero** - Welcome section with call-to-action buttons
3. **Projects** - Showcase of featured projects
4. **Skills** - Technical skills categorized by type
5. **Contact** - Contact information and message form
6. **Footer** - Links and social media

## Project Structure

```
portfolio_app/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   ├── index.css
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── Projects.css
│   │   ├── Skills.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Updating Portfolio Content

Edit the component files to customize:

- **Header** - Navigation items in `src/components/Header.tsx`
- **Hero** - Title and subtitle in `src/components/Hero.tsx`
- **Projects** - Project details in `src/components/Projects.tsx`
- **Skills** - Skill categories in `src/components/Skills.tsx`
- **Contact** - Contact information in `src/components/Contact.tsx`

### Color Scheme

Modify the CSS variables in `src/styles/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --bg-light: #f9fafb;
  --bg-white: #ffffff;
}
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **ESLint** - Code quality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
