import type { Blog } from "./definitions"

export const blogs: Blog[] = [
  {
    id: 1,
    title: "MongoBleed: Understanding CVE-2025-14847",
    slug: "mongobleed-cve-2025-14847",
    createdAt: "2025-12-29",
    excerpt:
      "A deep dive into the critical MongoBleed vulnerability affecting MongoDB's zlib compression, how it works, and how to protect your databases.",
    content: `## What is MongoBleed?

MongoBleed (CVE-2025-14847) is a high-severity information disclosure vulnerability discovered in MongoDB's network transport layer. This flaw allows unauthenticated, remote attackers to read uninitialized heap memory from affected MongoDB servers.

## How Does It Work?

The vulnerability arises from improper handling of length parameter inconsistencies in the zlib compression protocol headers during decompression. When zlib compression is enabled (which is the default in many configurations), an attacker can craft malicious requests that cause the server to leak sensitive heap memory.

The attack occurs before authentication, meaning no credentials are needed to exploit it.

## Affected Versions

The following MongoDB versions are vulnerable:

- 8.2.0 to 8.2.2
- 8.0.0 to 8.0.16
- 7.0.0 to 7.0.27
- 6.0.0 to 6.0.26
- 5.0.0 to 5.0.31
- 4.4.0 to 4.4.29
- All versions of 4.2, 4.0, and 3.6 series

## What Data Is At Risk?

Because the vulnerability leaks uninitialized heap memory, attackers may be able to extract:

- Database credentials
- Session tokens
- Application secrets stored in memory
- Query data from other connections
- Internal configuration details

## Remediation Steps

**1. Upgrade MongoDB immediately** to one of these patched versions:

\`\`\`bash
# Patched versions
8.2.3
8.0.17
7.0.28
6.0.27
5.0.32
4.4.30
\`\`\`

**2. If immediate upgrade is not possible**, disable zlib compression:

\`\`\`yaml
# mongod.conf
net:
  compression:
    compressors: snappy,zstd
\`\`\`

**3. Restrict network access** to MongoDB using firewalls or security groups. Never expose MongoDB directly to the internet.

## Detection

Monitor your MongoDB logs for unusual connection patterns or repeated failed decompression attempts. Implement network monitoring to detect potential exploitation attempts.

## Key Takeaways

- Always keep MongoDB updated to the latest security patches
- Never expose database ports directly to the internet
- Use network segmentation and firewalls
- Enable authentication and use strong credentials
- Regularly audit your MongoDB configuration`,
  },
  {
    id: 2,
    title: "Getting Started with React Server Components",
    slug: "react-server-components-guide",
    createdAt: "2025-12-15",
    excerpt:
      "Learn how React Server Components change the way we build React applications, with practical examples and best practices.",
    content: `## What Are React Server Components?

React Server Components (RSC) represent a fundamental shift in how we think about React applications. They allow components to run exclusively on the server, reducing the JavaScript bundle sent to the client and enabling direct access to backend resources.

## Key Benefits

Server Components offer several advantages:

- **Smaller Bundle Size**: Server Components never ship to the client, reducing JavaScript payload
- **Direct Backend Access**: Query databases and access file systems directly in components
- **Improved Performance**: Less JavaScript means faster page loads and better Core Web Vitals
- **Automatic Code Splitting**: Only client components are bundled for the browser

## Server vs Client Components

\`\`\`tsx
// This is a Server Component by default
async function BlogList() {
  const posts = await db.posts.findMany()
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

// Add 'use client' for client interactivity
'use client'
function LikeButton({ postId }) {
  const [likes, setLikes] = useState(0)
  return <button onClick={() => setLikes(l => l + 1)}>{likes}</button>
}
\`\`\`

## Best Practices

1. **Start with Server Components** - Only add 'use client' when you need interactivity
2. **Keep client boundaries small** - Push 'use client' as far down the tree as possible
3. **Pass serializable props** - Data passed from server to client must be serializable
4. **Use Suspense for loading states** - Wrap async components in Suspense boundaries

## When to Use Client Components

Use client components when you need:

- Event listeners (onClick, onChange, etc.)
- State and lifecycle effects (useState, useEffect)
- Browser-only APIs
- Custom hooks that depend on state or effects`,
  },
  {
    id: 3,
    title: "Deploying Next.js Apps on Vercel",
    slug: "nextjs-vercel-deployment",
    createdAt: "2025-12-01",
    excerpt:
      "A complete guide to deploying your Next.js applications on Vercel, from initial setup to production optimization.",
    content: `## Why Vercel for Next.js?

Vercel is the company behind Next.js, making it the most optimized platform for deploying Next.js applications. You get automatic optimizations, edge functions, and seamless integration out of the box.

## Getting Started

Deploying to Vercel is straightforward:

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy from your project directory
vercel
\`\`\`

Or simply connect your GitHub repository to Vercel for automatic deployments on every push.

## Environment Variables

Configure environment variables in the Vercel dashboard or via CLI:

\`\`\`bash
vercel env add DATABASE_URL
\`\`\`

Remember to use NEXT_PUBLIC_ prefix for variables needed in the browser.

## Performance Features

Vercel automatically enables:

- **Edge Network**: Your app is served from the nearest edge location
- **Image Optimization**: Automatic WebP/AVIF conversion and resizing
- **Incremental Static Regeneration**: Update static pages without rebuilding
- **Analytics**: Real-time performance monitoring

## Production Checklist

Before going live, ensure:

1. All environment variables are set for production
2. Error pages (404, 500) are customized
3. Metadata and OpenGraph tags are configured
4. Security headers are properly set
5. Analytics and monitoring are enabled`,
  },
  {
    id: 4,
    title: "TypeScript Best Practices for React",
    slug: "typescript-react-best-practices",
    createdAt: "2025-11-20",
    excerpt: "Essential TypeScript patterns and practices for writing type-safe React applications that scale.",
    content: `## Why TypeScript for React?

TypeScript adds static typing to React applications, catching errors at compile time rather than runtime. This leads to more maintainable code and better developer experience with enhanced IDE support.

## Component Props Typing

\`\`\`tsx
// Define props interface
interface ButtonProps {
  variant: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

// Use with components
function Button({ variant, size = 'md', children, onClick }: ButtonProps) {
  return (
    <button className={cn(variant, size)} onClick={onClick}>
      {children}
    </button>
  )
}
\`\`\`

## Generic Components

\`\`\`tsx
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map(renderItem)}</ul>
}
\`\`\`

## Event Handlers

\`\`\`tsx
// Properly typed event handlers
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value)
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // handle form submission
}
\`\`\`

## Key Practices

- Use interface for props, type for unions
- Avoid any - use unknown when type is truly unknown
- Enable strict mode in tsconfig.json
- Use const assertions for literal types
- Leverage utility types (Partial, Pick, Omit)`,
  },
  {
    id: 5,
    title: "Building Accessible React Components",
    slug: "accessible-react-components",
    createdAt: "2025-11-10",
    excerpt:
      "How to build React components that are accessible to everyone, including keyboard navigation and screen reader support.",
    content: `## Why Accessibility Matters

Web accessibility ensures that everyone, including people with disabilities, can use your application. It's not just good ethics—it's often a legal requirement and improves UX for all users.

## Semantic HTML First

Always start with semantic HTML elements:

\`\`\`tsx
// Good - uses semantic elements
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

// Avoid - divs with click handlers
<div onClick={goToHome}>Home</div>
\`\`\`

## ARIA Attributes

When semantic HTML isn't enough, use ARIA:

\`\`\`tsx
function Modal({ isOpen, onClose, children }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      hidden={!isOpen}
    >
      <h2 id="modal-title">Modal Title</h2>
      {children}
      <button onClick={onClose} aria-label="Close modal">
        <XIcon />
      </button>
    </div>
  )
}
\`\`\`

## Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

\`\`\`tsx
function Dropdown({ items }) {
  const [activeIndex, setActiveIndex] = useState(0)
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        setActiveIndex(i => Math.min(i + 1, items.length - 1))
        break
      case 'ArrowUp':
        setActiveIndex(i => Math.max(i - 1, 0))
        break
      case 'Enter':
        selectItem(items[activeIndex])
        break
    }
  }
  
  return <ul onKeyDown={handleKeyDown} tabIndex={0}>...</ul>
}
\`\`\`

## Accessibility Checklist

- All images have alt text
- Form inputs have associated labels
- Color contrast meets WCAG standards
- Focus states are visible
- Page has proper heading hierarchy
- Skip links are provided for navigation`,
  },
]

export async function getBlogs(): Promise<Blog[]> {
  return blogs
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  return blogs.find((blog) => blog.slug === slug) || null
}
