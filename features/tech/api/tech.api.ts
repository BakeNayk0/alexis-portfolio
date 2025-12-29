import { Tech } from "@/features/tech/models/tech.model";

export const getTechs = async (): Promise<Tech[]> => {
  try {
    const techs = JSON.stringify([
      {
        url: "tech_nextjs.svg",
        name: "Next.js",
        description: "Next.js is an opinionated JavaScript framework that offers a full JavaScript/TypeScript environment for both frontend and backend, designed with best practices and modern tools in mind. Unlike traditional client-side frameworks, it defaults to server-side rendering (SSR) for better performance and fine-grained optimization, while also supporting SSG (Static Site Generation), ISR (Incremental Static Regeneration), and CSR (Client-Side Rendering) to give developers full control over how content is delivered. This flexibility allows you to build fast, optimized, and SEO-friendly web applications right out of the box, with the option to render content on the client when needed.",
        hash: "",
        ext: "",
      },
      {
        url: "tech_react.svg",
        name: "React",
        description: "React is a popular JavaScript library for building user interfaces, developed and maintained by Meta. It focuses on creating fast, interactive UIs using a component-based architecture, allowing developers to build reusable and maintainable code. Unlike full-stack frameworks, React handles only the view layer but can be paired with a variety of backend solutions and libraries. Its virtual DOM enables highly efficient updates and rendering, while hooks and context API offer powerful tools for state management and logic sharing. This flexibility makes React ideal for building dynamic, responsive web applications that scale efficiently and are easy to extend over time.",
        hash: "",
        ext: "",
      },
      {
        url: "tech_laravel.svg",
        name: "Laravel",
        description: "Laravel is a powerful PHP framework designed for building robust and scalable web applications with an elegant and expressive syntax. It offers a full-stack environment with built-in tools like routing, ORM (Eloquent), middleware, and authentication, making backend development faster and more secure. Unlike traditional PHP frameworks, Laravel emphasizes modern development practices, including dependency injection, queues, and real-time event broadcasting with Laravel Echo. With features like Blade templating, RESTful controllers, and first-party packages, Laravel helps developers quickly craft maintainable and feature-rich applications while focusing on performance and code quality.",
        hash: "",
        ext: "",
      },
      {
        url: "tech_nestjs.svg",
        name: "Nest.js",
        description: "Nest.js is a progressive Node.js framework that enables developers to build scalable, efficient, and well-structured server-side applications. Built on top of Express and fully supporting TypeScript, Nest.js introduces modular architecture, dependency injection, and decorators for a highly organized codebase. Unlike minimalistic frameworks, Nest.js comes with batteries included, offering powerful tools like guards, interceptors, and built-in validation. It seamlessly integrates with GraphQL, WebSockets, and microservices patterns, giving developers full flexibility to handle complex backends. This makes Nest.js ideal for modern APIs, microservices, and enterprise-grade applications with clean and maintainable architecture.",
        hash: "",
        ext: "",
      },
      {
        url: "tech_tailwind.svg",
        name: "Tailwind",
        description: "Tailwind CSS is a utility-first CSS framework designed to help developers build modern, responsive user interfaces directly in their markup. Unlike traditional CSS frameworks that offer predefined components, Tailwind provides low-level utility classes for precise styling control without writing custom CSS. It encourages consistency and rapid development through composable class names, responsive variants, and design tokens like spacing, colors, and typography. With features like Just-in-Time (JIT) mode, PurgeCSS, and theming, Tailwind allows you to create fully customized designs while maintaining high performance and minimal CSS output, making it ideal for both small projects and large-scale applications.",
        hash: "",
        ext: "",
      },
      {
        url: "tech_docker.svg",
        name: "Docker",
        description: "Docker is a leading containerization platform that enables developers to package applications and their dependencies into lightweight, portable containers. By isolating apps from the underlying system, Docker ensures consistent behavior across development, testing, and production environments. Unlike traditional virtualization, Docker containers share the host OS kernel, making them faster and more resource-efficient. With tools like Docker Compose for multi-container setups and Docker Hub for image distribution, Docker simplifies deployment and scaling of microservices and distributed systems. This flexibility makes Docker ideal for modern DevOps workflows, CI/CD pipelines, and cloud-native applications, promoting agility and reliability in software delivery.",
        hash: "",
        ext: "",
      },
    ]);

    const json: Tech[] = JSON.parse(techs);

    return json;
  } catch (error) {
    console.error(error);
  }
  return [];
};
