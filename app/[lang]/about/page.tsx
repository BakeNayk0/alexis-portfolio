import { getDictionary } from "@/lib/dictionaries";

export default async function About(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang);

  return (
    <div className="flex flex-col h-full lg:flex-row px-4 sm:px-6 lg:px-8 gap-8 max-w-4xl mx-auto">
      <div className="text-muted-foreground gap-5 sm:gap-6 text-base sm:text-lg flex w-full flex-col font-mono">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold font-sans">
            {dict.about_page.hey}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-sans font-medium">
            {dict.about_page.subtitle}
          </p>
        </div>

        <p className="leading-relaxed">
          {dict.about_page.p1_1}
          <span className="text-foreground font-medium">Next.js</span>{dict.about_page.p1_2}
          <span className="text-foreground font-medium">Nest.js</span>{dict.about_page.p1_3}
          <span className="text-foreground font-medium">TypeScript</span>{dict.about_page.p1_4}
          <span className="text-foreground font-medium">Python</span>
          {dict.about_page.p1_5}
        </p>

        <p className="leading-relaxed">
          {dict.about_page.p2_1}
          <span className="text-primary font-medium">cybersecurity</span>
          {dict.about_page.p2_2}
        </p>

        <p className="leading-relaxed">
          {dict.about_page.p3_1}
          <span className="text-primary font-medium">Vercel</span>{dict.about_page.p3_2}
          <span className="text-primary font-medium">v0</span>{dict.about_page.p3_3}
          <span className="text-primary font-medium">Gemini CLI</span>
          {dict.about_page.p3_4}
        </p>

        <p className="text-foreground leading-relaxed">
          {dict.about_page.p4}
        </p>
      </div>
    </div>
  );
};