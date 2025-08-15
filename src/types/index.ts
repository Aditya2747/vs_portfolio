export interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
}
