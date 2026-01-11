"use client";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col justify-between h-full max-h-[600px] px-8 py-12">
        {/* TOP */}
        <div>
          {/* PROFILE PHOTO */}
          <div className="mb-8 flex justify-center">
            <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-accent transition-transform duration-300 hover:scale-105">
              <Image
                src="/profile.png" // taruh di folder /public
                alt="Fakhri Fitra Perdana"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl font-bold text-primary">
            Fakhri Fitra Perdana
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-accent">
            Frontend · Backend · Mobile
          </h2>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-secondary">
            Test
          </p>

          <nav className="mt-16 flex flex-col gap-6 text-sm">
            {["About", "Experience", "Projects"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group flex items-center gap-4 text-secondary transition-colors duration-300 hover:text-accent"
              >
                <span className="uppercase tracking-widest">{item}</span>

                <div className="ml-auto h-px w-8 bg-gray-700 transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
              </a>
            ))}
          </nav>
        </div>

        {/* BOTTOM ICONS */}
        <div className="flex items-center gap-20 text-secondary">
          <a
            href="https://github.com"
            className="transition-colors duration-300 hover:text-accent"
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="https://linkedin.com"
            className="transition-colors duration-300 hover:text-accent"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </a>
          <a
            href="https://instagram.com"
            className="transition-colors duration-300 hover:text-accent"
            aria-label="Instagram"
          >
            <FiInstagram size={22} />
          </a>
        </div>
      </div>
    </aside>
  );
}
