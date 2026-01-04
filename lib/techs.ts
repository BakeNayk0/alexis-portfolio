export interface Tech {
  url: string
  name: string
  slug: string
  description: string
  hash: string
  ext: string
}

export const techs: Tech[] = [
  {
    url: "nextjs-icon",
    name: "Next.js",
    slug: "nextjs",
    description:
      "Next.js is an opinionated JavaScript framework that offers a full JavaScript/TypeScript environment for both frontend and backend, designed with best practices and modern tools in mind. Unlike traditional client-side frameworks, it defaults to server-side rendering (SSR) for better performance and fine-grained optimization, while also supporting SSG (Static Site Generation), ISR (Incremental Static Regeneration), and CSR (Client-Side Rendering) to give developers full control over how content is delivered.",
    hash: "",
    ext: "",
  },
  {
    url: "tech_react.svg",
    name: "React",
    slug: "react",
    description:
      "React is a popular JavaScript library for building user interfaces, developed and maintained by Meta. It focuses on creating fast, interactive UIs using a component-based architecture, allowing developers to build reusable and maintainable code. Its virtual DOM enables highly efficient updates and rendering, while hooks and context API offer powerful tools for state management and logic sharing.",
    hash: "",
    ext: "",
  },
  {
    url: "tech_python.svg",
    name: "Python",
    slug: "python",
    description:
      "Python is a versatile, high-level programming language widely used in cybersecurity, automation, data analysis, and backend development. Known for its clean syntax and extensive libraries, Python excels in penetration testing, exploit development, network scanning, and security tool scripting. Its rich ecosystem includes frameworks like Scapy, Metasploit integrations, and libraries for cryptography, making it essential for security researchers and ethical hackers.",
    hash: "",
    ext: "",
  },
  {
    url: "tech_django.svg",
    name: "Django",
    slug: "django",
    description:
      "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built with security in mind, Django comes with built-in protections against SQL injection, XSS, CSRF, and clickjacking attacks. Its batteries-included philosophy provides an ORM, authentication system, admin interface, and robust middleware out of the box, making it ideal for building secure, scalable web applications quickly.",
    hash: "",
    ext: "",
  },
  {
    url: "tech_laravel.svg",
    name: "Laravel",
    slug: "laravel",
    description:
      "Laravel is a powerful PHP framework designed for building robust and scalable web applications with an elegant and expressive syntax. It offers a full-stack environment with built-in tools like routing, ORM (Eloquent), middleware, and authentication, making backend development faster and more secure.",
    hash: "",
    ext: "",
  },
  {
    url: "tech_nestjs.svg",
    name: "Nest.js",
    slug: "nestjs",
    description:
      "Nest.js is a progressive Node.js framework that enables developers to build scalable, efficient, and well-structured server-side applications. Built on top of Express and fully supporting TypeScript, Nest.js introduces modular architecture, dependency injection, and decorators for a highly organized codebase.",
    hash: "",
    ext: "",
  },
  {
    url: "tech_tailwind.svg",
    name: "Tailwind",
    slug: "tailwind",
    description:
      "Tailwind CSS is a utility-first CSS framework designed to help developers build modern, responsive user interfaces directly in their markup. Unlike traditional CSS frameworks that offer predefined components, Tailwind provides low-level utility classes for precise styling control without writing custom CSS.",
    hash: "",
    ext: "",
  },
  {
    url: "tech_docker.svg",
    name: "Docker",
    slug: "docker",
    description:
      "Docker is a leading containerization platform that enables developers to package applications and their dependencies into lightweight, portable containers. By isolating apps from the underlying system, Docker ensures consistent behavior across development, testing, and production environments.",
    hash: "",
    ext: "",
  },
]

export async function getTechs(): Promise<Tech[]> {
  return techs
}

export async function getTechBySlug(slug: string): Promise<Tech | null> {
  return techs.find((tech) => tech.slug === slug) || null
}
