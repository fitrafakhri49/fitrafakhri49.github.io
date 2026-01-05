// components/projects.tsx
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Build a Spotify Connected App",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    tech: ["Video Course", "API", "Tutorial"],
    image: "https://placehold.co/600x400/0a192f/64ffda?text=Spotify+Course",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Spotify Profile",
    description:
      "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks.",
    tech: ["React", "Express", "Spotify API", "Heroku"],
    image: "https://placehold.co/600x400/0a192f/64ffda?text=Spotify+App",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Halcyon Theme",
    description:
      "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. 100k+ Installs",
    tech: ["VS Code", "Sublime Text", "Atom", "Theme Design"],
    image: "https://placehold.co/600x400/0a192f/64ffda?text=Halcyon",
    github: "https://github.com",
    live: "https://marketplace.visualstudio.com",
    featured: false,
  },
  {
    title: "Portfolio v4",
    description:
      "An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks on GitHub.",
    tech: ["Gatsby", "Styled Components", "Netlify"],
    image: "https://placehold.co/600x400/0a192f/64ffda?text=Portfolio",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

export default function Projects() {
  return (
    <div>
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-2xl font-bold text-primary">
          <span className="text-accent">03.</span> Projects
        </h2>
        <div className="h-[1px] w-32 bg-gray-700" />
      </div>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <div key={index} className="group relative grid gap-8 lg:grid-cols-2">
            {/* Project image */}
            <div className="relative order-2 lg:order-1 overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary">
                  Featured
                </div>
              )}
            </div>

            {/* Project content */}
            <div
              className={`order-1 lg:order-2 ${
                index % 2 === 0 ? "lg:text-right" : ""
              }`}
            >
              <div className={index % 2 === 0 ? "lg:pl-8" : "lg:pr-8"}>
                <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <div className="my-4 rounded-lg bg-accent/10 p-4">
                  <p className="text-secondary">{project.description}</p>
                </div>

                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "lg:justify-end" : ""
                  }`}
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  className={`mt-6 flex gap-4 ${
                    index % 2 === 0 ? "lg:justify-end" : ""
                  }`}
                >
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
