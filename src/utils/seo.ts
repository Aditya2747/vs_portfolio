export const SEO_CONFIG = {
  title: 'VS Code Portfolio - Aditya Kumar',
  description: 'Full Stack Developer specializing in React, Node.js, and cloud technologies. Explore my projects and skills in this VS Code themed portfolio.',
  keywords: 'React, Node.js, TypeScript, Full Stack Developer, Portfolio, VS Code Theme',
  author: 'Aditya Kumar',
  url: 'https://your-portfolio.vercel.app',
  image: '/og-image.png',
  twitter: '@yourusername',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
};

export const generateMetaTags = () => {
  return [
    { name: 'description', content: SEO_CONFIG.description },
    { name: 'keywords', content: SEO_CONFIG.keywords },
    { name: 'author', content: SEO_CONFIG.author },
    
    // Open Graph
    { property: 'og:title', content: SEO_CONFIG.title },
    { property: 'og:description', content: SEO_CONFIG.description },
    { property: 'og:image', content: SEO_CONFIG.image },
    { property: 'og:url', content: SEO_CONFIG.url },
    { property: 'og:type', content: 'website' },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: SEO_CONFIG.title },
    { name: 'twitter:description', content: SEO_CONFIG.description },
    { name: 'twitter:image', content: SEO_CONFIG.image },
    { name: 'twitter:creator', content: SEO_CONFIG.twitter },
  ];
};
