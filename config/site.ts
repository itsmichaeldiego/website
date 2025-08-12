export type SiteConfig = typeof siteConfig;

const navItems = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

export const siteConfig = {
  name: "Michael Diego — Senior Frontend / Full Stack Engineer",
  description:
    "Portfolio of Michael Diego, a Senior Frontend / Full Stack Engineer with 10+ years of experience building scalable, user-focused web applications using React, Next.js, TypeScript, Node.js, and GraphQL.",
  navItems: [
    { label: "Home", href: "#home" },
    ...navItems,
  ],
  navMenuItems: [
    ...navItems,
  ],
  links: {
    github: "https://github.com/itsmichaeldiego",
    linkedin: "https://linkedin.com/in/itsmichaeldiego",
  },
};
