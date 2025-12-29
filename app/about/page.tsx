const About = () => {
  return (
    <div className="flex flex-col h-full lg:flex-row px-4 sm:px-6 lg:px-8 gap-8 max-w-4xl mx-auto">
      <div className="text-muted-foreground gap-5 sm:gap-6 text-base sm:text-lg flex w-full flex-col font-mono">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold font-sans">
            Hey, I'm Alexis <span className="text-primary">(nayko)</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-sans font-medium">
            French-Swiss software engineer
          </p>
        </div>

        <p className="leading-relaxed">
          I build with <span className="text-foreground font-medium">Next.js</span>,{" "}
          <span className="text-foreground font-medium">React</span>,{" "}
          <span className="text-foreground font-medium">TypeScript</span>, and{" "}
          <span className="text-foreground font-medium">Python</span> — whether it's for clients, companies, or my own
          side projects. I do well in corporate environments, but I thrive best when given{" "}
          <span className="text-foreground font-medium">autonomy</span> — point me at a problem, and I'll figure it out.
          I'm reliable, I ship fast, and I take ownership of what I build.
        </p>

        <p className="leading-relaxed">
          I'm currently expanding into <span className="text-primary font-medium">cybersecurity</span> — there's
          something about <span className="text-foreground font-medium">bug bounties</span> and{" "}
          <span className="text-foreground font-medium">red teaming</span> that feels like solving the ultimate puzzle.
          Long-term goal? Combining dev and security skills, maybe even from the Swiss mountains one day.{" "}
          <span className="text-primary font-medium">AI</span> has transformed how I prototype and iterate, which frees
          me up to tackle <span className="text-primary font-medium">harder challenges</span> and keep pushing my
          limits.
        </p>

        <p className="leading-relaxed">
          Off the clock: husband to an amazing wife, dad to a little legend of a son, and owner of a wonderfully chaotic{" "}
          <span className="text-foreground font-medium">German Shepherd</span>. I fuel up on{" "}
          <span className="text-foreground font-medium">ramen</span>, blast{" "}
          <span className="text-foreground font-medium">metal</span> (Lorna Shore, Slipknot) to focus, and unwind with
          survival horror games, Hollow Knight, or the occasional{" "}
          <span className="text-foreground font-medium">League of Legends</span> session.
        </p>

        <p className="leading-relaxed">
          Big fan of <span className="text-foreground font-medium">SpaceX</span>,{" "}
          <span className="text-foreground font-medium">Tesla</span>,{" "}
          <span className="text-foreground font-medium">xAI</span>, and everything{" "}
          <span className="text-primary font-medium">Vercel</span> builds. Switzerland is the long-term plan — family
          first, always.
        </p>

        <p className="text-foreground leading-relaxed">
          If you're looking for someone who can work independently, deliver consistently, and actually cares about what
          they ship — let's talk. <span className="text-muted-foreground">(Ramen recommendations also welcome.)</span>
        </p>
      </div>
    </div>
  )
}

export default About
