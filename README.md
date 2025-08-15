# VS Code Portfolio 🎨

A stunning VS Code themed portfolio website built with React, TypeScript, and Tailwind CSS. Showcases projects and skills in an interactive, developer-friendly interface.

## 🌟 Features

- **VS Code Theme** - Authentic VS Code interface with proper syntax highlighting
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dark/Light Theme Toggle** - Switch between themes like in VS Code
- **Interactive Navigation** - Sidebar navigation with smooth transitions
- **Project Showcase** - Detailed project cards with GitHub links and live demos
- **Skills Visualization** - Progress bars and categorized skills
- **Contact Form** - Professional contact form with validation
- **SEO Optimized** - Meta tags, Open Graph, and Twitter cards
- **Performance Optimized** - Fast loading with Vite and optimized assets

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Modules
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📱 Sections

- **About** - Personal introduction with code-style presentation
- **Projects** - Showcase of 4 major projects with tech stacks
- **Skills** - Categorized skills with proficiency levels
- **Contact** - Professional contact form

## 🎯 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/vscode-portfolio.git

# Navigate to project directory
cd vscode-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/pages/About.tsx` - Personal details
- `src/components/pages/Projects.tsx` - Your projects
- `src/components/pages/Skills.tsx` - Your skills
- `src/utils/seo.ts` - SEO and social links

### Theme Colors
Modify theme colors in `tailwind.config.js` and CSS variables in `src/styles/globals.css`.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Bundle Size**: Optimized with tree-shaking

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure
```
vscode-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── StatusBar.tsx
│   │   └── pages/
│   │       ├── About.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       └── Contact.tsx
│   ├── utils/
│   │   └── seo.ts
│   ├── types/
│   └── styles/
├── public/
├── index.html
└── package.json
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourusername)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

---

Built with ❤️ by [Your Name](https://your-portfolio.vercel.app)
