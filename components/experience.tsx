// components/experience.tsx
import Image from "next/image";

const experiences = [
  {
    period: "2024 — Present",
    company: "Klaviyo",
    role: "Senior Front-End Engineer",
    description:
      "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams to implement and advocate for best practices in web accessibility.",
    tech: ["JavaScript", "TypeScript", "React", "Storybook", "Accessibility"],
    image: "https://placehold.co/80x80/0a192f/64ffda?text=Klaviyo",
  },
  {
    period: "2018 — 2024",
    company: "Upstatement",
    role: "Front End Engineer",
    description:
      "Built, styled, and shipped high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, and more.",
    tech: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "WordPress",
      "Node.js",
    ],
    image: "https://placehold.co/80x80/0a192f/64ffda?text=Upstate",
  },
  {
    period: "July — Dec 2017",
    company: "Apple",
    role: "UI Engineer Co-op",
    description:
      "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
    tech: ["Ember", "SCSS", "JavaScript", "MusicKit.js"],
    image: "https://placehold.co/80x80/0a192f/64ffda?text=Apple",
  },
  {
    period: "2016 — 2017",
    company: "Scout Studio",
    role: "Lead Developer",
    description:
      "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.",
    tech: ["Jekyll", "SCSS", "JavaScript", "WordPress"],
    image: "https://placehold.co/80x80/0a192f/64ffda?text=Scout",
  },
];

export default function Experience() {
  return (
    <div>
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-2xl font-bold text-primary">
          <span className="text-accent">02.</span> Experience
        </h2>
        <div className="h-[1px] w-32 bg-gray-700" />
      </div>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative flex gap-6">
            {/* Company logo/image */}
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50">
              <Image
                src={exp.image}
                alt={`${exp.company} logo`}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <span className="text-sm text-accent font-mono">
                {exp.period}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                {exp.role} · {exp.company}
              </h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-secondary">
                {exp.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline connector */}
            {index < experiences.length - 1 && (
              <div className="absolute -bottom-8 left-8 h-8 w-[1px] bg-gray-700" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
