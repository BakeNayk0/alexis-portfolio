import type { Blog } from "@/lib/definitions"

export const blogs: Blog[] = [
  {
    id: 1,
    title: "MongoBleed: Critical MongoDB Vulnerability Explained",
    slug: "mongobleed-cve-2025-14847",
    createdAt: "2025/12/29",
    excerpt:
      "A deep dive into CVE-2025-14847, a critical memory leak vulnerability affecting MongoDB's zlib compression that allows unauthenticated attackers to read sensitive server memory.",
    content: `MongoBleed (CVE-2025-14847) is a high-severity information disclosure vulnerability that has sent shockwaves through the database community. This flaw allows unauthenticated, remote attackers to read uninitialized heap memory from MongoDB servers - potentially exposing credentials, session tokens, and application secrets.

## What is MongoBleed?

MongoBleed is a critical vulnerability in MongoDB's network transport layer. It exploits improper handling of length parameter inconsistencies in zlib compression protocol headers during decompression. The most alarming aspect? **It occurs before authentication**, meaning attackers don't need any credentials to exploit it.

\`\`\`
Attacker → MongoDB Server (zlib enabled)
         → Malformed compression header
         → Server returns uninitialized heap memory
         → Sensitive data leaked
\`\`\`

## How It Works

The vulnerability stems from a mismatch between declared and actual data lengths in zlib-compressed messages:

1. Attacker sends a specially crafted message with inconsistent length parameters
2. MongoDB's decompression routine allocates a buffer based on the declared length
3. The buffer contains uninitialized heap memory from previous operations
4. The server processes the malformed request and may leak this memory in responses

This is reminiscent of the infamous Heartbleed vulnerability in OpenSSL, hence the name "MongoBleed."

## Affected Versions

The vulnerability affects a wide range of MongoDB versions:

- **8.2.x**: 8.2.0 to 8.2.2
- **8.0.x**: 8.0.0 to 8.0.16
- **7.0.x**: 7.0.0 to 7.0.27
- **6.0.x**: 6.0.0 to 6.0.26
- **5.0.x**: 5.0.0 to 5.0.31
- **4.4.x**: 4.4.0 to 4.4.29
- **Legacy**: All versions of 4.2, 4.0, and 3.6 series

## What Data Is At Risk?

Heap memory can contain extremely sensitive information:

- **Database credentials** - Connection strings, passwords
- **Session tokens** - Active user sessions
- **Application secrets** - API keys, encryption keys
- **Query data** - Recent database operations
- **Internal state** - Server configuration details

## Immediate Remediation

**Option 1: Upgrade MongoDB (Recommended)**

Patched versions are available:

\`\`\`bash
# Upgrade to patched versions
MongoDB 8.2.3
MongoDB 8.0.17
MongoDB 7.0.28
MongoDB 6.0.27
MongoDB 5.0.32
MongoDB 4.4.30
\`\`\`

**Option 2: Disable zlib Compression (Temporary)**

If immediate upgrade isn't possible:

\`\`\`yaml
# mongod.conf
net:
  compression:
    compressors: snappy,zstd  # Remove zlib
\`\`\`

Or via command line:

\`\`\`bash
mongod --networkMessageCompressors snappy,zstd
\`\`\`

**Option 3: Network Isolation**

Restrict access to MongoDB ports using firewalls:

\`\`\`bash
# Allow only trusted IPs
iptables -A INPUT -p tcp --dport 27017 -s trusted_ip -j ACCEPT
iptables -A INPUT -p tcp --dport 27017 -j DROP
\`\`\`

## Detection and Monitoring

Check if your MongoDB has zlib compression enabled:

\`\`\`javascript
// In MongoDB shell
db.serverStatus().network
\`\`\`

Monitor for unusual connection patterns or memory-related anomalies in your logs.

## Lessons Learned

MongoBleed highlights several critical security principles:

1. **Defense in depth** - Never expose databases directly to the internet
2. **Patch management** - Keep databases updated, especially for security fixes
3. **Network segmentation** - Isolate database servers from public networks
4. **Monitoring** - Watch for unusual traffic patterns

## Timeline

- **Discovery**: Reported to MongoDB security team
- **Patch Release**: December 2025
- **Public Disclosure**: December 2025
- **CVE Assignment**: CVE-2025-14847

## Conclusion

MongoBleed is a serious vulnerability that requires immediate attention. If you're running MongoDB with zlib compression enabled, you should upgrade to a patched version immediately or disable zlib compression as a temporary mitigation.

The pre-authentication nature of this vulnerability makes it particularly dangerous - attackers can probe for and exploit vulnerable servers without any prior access. Take action now to protect your data.`,
  },
  {
    id: 2,
    title: "Next.js: The React Framework for Production",
    slug: "nextjs",
    createdAt: "2024/05/20",
    excerpt: "Exploring why Next.js has become the go-to framework for React applications.",
    content: `Next.js has revolutionized how we build React applications. From automatic code splitting to built-in API routes, it provides everything you need for production-ready apps.

## Server Components: A Game Changer

React Server Components (RSC) represent the biggest shift in React development since hooks. With Next.js 14, server components are the default, meaning your components render on the server unless you explicitly opt into client-side rendering.

\`\`\`tsx
// This component runs on the server by default
async function BlogList() {
  const posts = await fetchPosts() // Direct database access!
  return posts.map(post => <PostCard key={post.id} {...post} />)
}
\`\`\`

## The App Router

The App Router introduces a new mental model for building applications:

- **Layouts** - Shared UI that persists across navigations
- **Loading States** - Built-in loading UI with Suspense
- **Error Handling** - Graceful error boundaries at every level
- **Parallel Routes** - Render multiple pages simultaneously

## Key Features I Love

1. **File-based Routing** - Your folder structure IS your routes
2. **API Routes** - Backend endpoints without a separate server
3. **Image Optimization** - Automatic WebP conversion and lazy loading
4. **Font Optimization** - Zero layout shift with next/font

## Performance Out of the Box

Next.js automatically optimizes your application:

- Static pages are pre-rendered at build time
- Dynamic pages use streaming for fast Time to First Byte
- JavaScript is split per-route, loading only what's needed

## Deployment with Vercel

While Next.js works anywhere, deploying to Vercel unlocks additional features like Edge Functions, Analytics, and automatic preview deployments for every pull request.

The developer experience is unmatched - push to git, and your site is live in seconds.`,
  },
  {
    id: 3,
    title: "React: Building Modern User Interfaces",
    slug: "react",
    createdAt: "2024/05/19",
    excerpt: "Understanding React's component model and modern patterns for building UIs.",
    content: `React changed how we think about building user interfaces. Its component-based architecture and declarative approach have influenced the entire frontend ecosystem.

## The Component Mental Model

Everything in React is a component. This simple idea has profound implications for how we structure applications:

\`\`\`tsx
function Welcome({ name }: { name: string }) {
  return <h1>Hello, {name}</h1>
}

// Compose components like building blocks
function App() {
  return (
    <div>
      <Welcome name="Developer" />
      <Welcome name="Designer" />
    </div>
  )
}
\`\`\`

## Hooks: Function Components Unleashed

Hooks transformed React development by enabling state and side effects in function components:

- **useState** - Local component state
- **useEffect** - Side effects and subscriptions
- **useContext** - Access context without prop drilling
- **useReducer** - Complex state logic
- **useMemo/useCallback** - Performance optimization

## Modern Patterns

### Custom Hooks

Extract and reuse stateful logic:

\`\`\`tsx
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 })
  
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return size
}
\`\`\`

### Compound Components

Build flexible, composable APIs:

\`\`\`tsx
<Select>
  <Select.Trigger>Choose an option</Select.Trigger>
  <Select.Options>
    <Select.Option value="1">Option 1</Select.Option>
    <Select.Option value="2">Option 2</Select.Option>
  </Select.Options>
</Select>
\`\`\`

## The Future: React 19

React continues to evolve with upcoming features:

- **Actions** - Simplified form handling and mutations
- **use()** - Read resources in render
- **Document Metadata** - Native support for title, meta tags

## Why React Still Dominates

After years of use, React remains my framework of choice because:

1. **Ecosystem** - Unmatched library support
2. **Community** - Endless resources and help
3. **Flexibility** - Use it your way
4. **Performance** - Virtual DOM and reconciliation

React isn't just a library - it's a way of thinking about UI development that makes complex applications manageable.`,
  },
  {
    id: 4,
    title: "Deploying to Vercel: From Code to Production",
    slug: "vercel-deployment",
    createdAt: "2024/06/15",
    excerpt: "A complete guide to deploying your applications on Vercel's edge network.",
    content: `Vercel has redefined what deployment should feel like. Push your code, and it's live. No configuration, no DevOps headaches - just ship.

## Why Vercel?

Vercel's platform is built around three principles:

1. **Developer Experience** - Instant feedback loops
2. **Performance** - Global edge network
3. **Collaboration** - Preview deployments for every branch

## Getting Started

Deploying to Vercel is remarkably simple:

\`\`\`bash
# Install the CLI
npm i -g vercel

# Deploy from your project directory
vercel
\`\`\`

That's it. Your app is now live on a global CDN.

## Preview Deployments

Every pull request gets its own deployment. This changes how teams work:

- **Designers** can review changes without running code locally
- **PMs** can test features before they merge
- **QA** can verify fixes in isolation

## Environment Variables

Manage secrets securely across environments:

- **Production** - Your live site
- **Preview** - Pull request deployments  
- **Development** - Local development

Variables are encrypted and only exposed to your functions.

## Edge Functions

Run code at the edge, close to your users:

\`\`\`ts
export const config = {
  runtime: 'edge',
}

export default function handler(request: Request) {
  return new Response('Hello from the edge!')
}
\`\`\`

Edge Functions start in milliseconds and run in 30+ regions worldwide.

## Analytics and Monitoring

Vercel provides built-in observability:

- **Web Vitals** - Core metrics like LCP, FID, CLS
- **Speed Insights** - Real user performance data
- **Logs** - Function execution and errors

## Best Practices

1. **Use Preview Deployments** - Test every change in production-like environment
2. **Set Up Redirects** - Handle old URLs gracefully
3. **Enable Analytics** - Understand real user experience
4. **Configure Caching** - Leverage the edge network

## The Vercel Workflow

My typical workflow:

1. Create feature branch
2. Push changes
3. Review preview deployment
4. Merge to main
5. Automatic production deployment

No CI/CD configuration, no deployment scripts - just code and ship.

Vercel has become an essential part of my development workflow, and I can't imagine going back to manual deployments.`,
  },
  {
    id: 5,
    title: "TypeScript: Why Type Safety Matters",
    slug: "typescript",
    createdAt: "2024/07/10",
    excerpt: "How TypeScript improves code quality and developer productivity in React projects.",
    content: `TypeScript has become the standard for serious JavaScript development. The benefits go far beyond catching typos - it fundamentally changes how you write and maintain code.

## The Case for Types

JavaScript's dynamic typing is both its strength and weakness. TypeScript adds a compile-time safety net:

\`\`\`tsx
// Without TypeScript - runtime error waiting to happen
function greet(user) {
  return 'Hello, ' + user.name.toUpperCase()
}

greet({ username: 'alex' }) // 💥 Runtime error!

// With TypeScript - caught at compile time
interface User {
  name: string
}

function greet(user: User) {
  return 'Hello, ' + user.name.toUpperCase()
}

greet({ username: 'alex' }) // ❌ Type error!
\`\`\`

## TypeScript in React

TypeScript shines in React applications:

\`\`\`tsx
interface ButtonProps {
  variant: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

function Button({ variant, size = 'md', children, onClick }: ButtonProps) {
  return (
    <button className={cn(variant, size)} onClick={onClick}>
      {children}
    </button>
  )
}
\`\`\`

Now every usage of Button is validated at compile time.

## Advanced Patterns

### Generics

Create reusable, type-safe components:

\`\`\`tsx
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map(renderItem)}</ul>
}
\`\`\`

### Discriminated Unions

Model complex state machines:

\`\`\`tsx
type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: User[] }
  | { status: 'error'; error: string }

function UserList({ state }: { state: State }) {
  switch (state.status) {
    case 'loading':
      return <Spinner />
    case 'success':
      return <List items={state.data} /> // data is typed!
    case 'error':
      return <Error message={state.error} />
    default:
      return null
  }
}
\`\`\`

## Productivity Gains

TypeScript isn't just about catching bugs:

- **Autocomplete** - Your editor knows every property and method
- **Refactoring** - Rename symbols confidently across the codebase
- **Documentation** - Types serve as living documentation
- **Onboarding** - New team members understand code faster

## The Learning Curve

Yes, TypeScript has a learning curve. But the investment pays off quickly:

1. Start with strict mode off
2. Add types to new code
3. Gradually type existing code
4. Enable strict mode when ready

## My Configuration

For React projects, I use these tsconfig options:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
\`\`\`

TypeScript has made me a better developer. The confidence to refactor, the speed of autocomplete, the documentation built into the code - it's hard to go back to plain JavaScript.`,
  },
]
