const About = () => {
  return (
    <div className="flex flex-col h-full lg:flex-row px-4 sm:px-6 lg:px-8 gap-8 max-w-4xl mx-auto">
      <div className="text-muted-foreground gap-5 sm:gap-6 text-base sm:text-lg flex w-full flex-col font-mono">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold font-sans">
            Hey, I&apos;m Alexis
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-sans font-medium">
            French–Swiss software engineer
          </p>
        </div>

        <p className="leading-relaxed">
          I build with{" "}
          <span className="text-foreground font-medium">Next.js</span>,{" "}
          <span className="text-foreground font-medium">Nest.js</span>,{" "}
          <span className="text-foreground font-medium">TypeScript</span>, and{" "}
          <span className="text-foreground font-medium">Python</span> — whether
          it&apos;s for companies or collaborative projects. I value clear
          communication and believe that the best products come from strong team
          alignment. While I can work independently when needed, I&apos;m always
          eager to learn from others and contribute my own expertise to help the
          team succeed.
        </p>

        <p className="leading-relaxed">
          I&apos;m also passionate about the intersection of development and
          security. I&apos;m currently developing my skills in{" "}
          <span className="text-primary font-medium">cybersecurity</span>, with
          a focus on web security and entry-level security practices. My goal is
          to combine my engineering background with a security-first mindset to
          help build safer, more resilient systems.
        </p>

        <p className="leading-relaxed">
          I&apos;m a big advocate for modern developer tools. I&apos;ve
          integrated <span className="text-primary font-medium">Vercel</span>,{" "}
          <span className="text-primary font-medium">v0</span>, and{" "}
          <span className="text-primary font-medium">Gemini CLI</span> into my
          daily workflow, which allows me to focus on solving complex problems
          and prototype efficiently. I&apos;m excited about the future of AI in
          software engineering and how it can empower teams to build better
          software, faster.
        </p>

        <p className="text-foreground leading-relaxed">
          If you&apos;re looking for someone who values collaboration, delivers
          consistently, and is always eager to learn — let&apos;s talk.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
