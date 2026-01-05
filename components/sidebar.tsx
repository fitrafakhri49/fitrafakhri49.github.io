// components/sidebar.tsx
"use client";

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-0 h-screen">
      <aside className="sticky top-0 h-screen w-full flex-col px-8 py-24 lg:flex">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-primary">
            Fakhri Fitra Perdana
          </h1>

          <h2 className="mt-4 text-xl text-accent font-semibold">
            Frontend Backend Mobile-App
          </h2>

          <p className="mt-6 max-w-sm leading-relaxed text-secondary text-sm">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>

          <nav className="mt-16 flex flex-col gap-6 text-sm">
            {["About", "Experience", "Projects"].map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`group flex items-center gap-4 transition-colors duration-300 ${
                    isActive
                      ? "text-accent"
                      : "text-secondary hover:text-accent"
                  }`}
                >
                  <span
                    className={`w-8 text-right text-xs transition-opacity ${
                      isActive
                        ? "opacity-100 text-accent"
                        : "opacity-0 group-hover:opacity-100 text-accent"
                    }`}
                  >
                    0{["About", "Experience", "Projects"].indexOf(item) + 1}
                  </span>
                  <span className="tracking-widest uppercase">{item}</span>
                  <div
                    className={`ml-auto h-[1px] transition-all duration-300 ${
                      isActive
                        ? "w-16 bg-accent"
                        : "w-8 bg-gray-700 group-hover:w-16 group-hover:bg-accent"
                    }`}
                  />
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-6 text-secondary">
          <a
            href="https://github.com"
            className="hover:text-accent transition-colors duration-300"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-accent transition-colors duration-300"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-accent transition-colors duration-300"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram size={20} />
          </a>
        </div>
      </aside>
    </div>
  );
}
