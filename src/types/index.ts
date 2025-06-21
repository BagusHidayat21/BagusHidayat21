// Loading Props

export interface LoadingScreenProps {
    onComplete: () => void;
}

//Topbar Props
export interface TopbarProps {
    logo?: string;
    links?: { name: string,  href: string }[];
}

//Hero Props
export interface HeroProps {
    name?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    location?: string;
    socialLinks?: {
      github?: string;
      linkedin?: string;
      email?: string;
    };
    ctaText?: string;
    ctaHref?: string;
}

//About Props
export interface AboutProps {
    title?: string;
    subtitle?: string;
    description?: string[];
    imageUrl?: string;
    resumeUrl?: string;
}

//Tech Stack Props
export interface TechStackProps {
    title?: string;
    subtitle?: string;
}

//Project Props

interface Project {
    id: number;
    title: string;
    role: string;
    description: string;
    techStack: string[];
    category: string;
    link?: string;
    githubRepo?: string;
    year: string;
    status: 'live' | 'completed' | 'development';
}
