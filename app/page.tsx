// app/page.tsx
import Sidebar from "@/components/sidebar";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/project";

export default function Home() {
  return (
    <div className="relative mx-auto flex max-w-[1800px]">
      {/* Sidebar column - fixed width */}
      <div className="lg:block lg:w-2/5">
        <Sidebar />
      </div>

      {/* Main content column - scrollable */}
      <div className="w-full lg:w-3/5">
        <main>
          <section
            id="about"
            className="px-4 py-20 lg:px-12 lg:py-24 scroll-mt-24"
            style={{ scrollMarginTop: "6rem" }}
          >
            <About />
          </section>

          <section
            id="experience"
            className="px-4 py-20 lg:px-12 lg:py-24 scroll-mt-24"
            style={{ scrollMarginTop: "6rem" }}
          >
            <Experience />
          </section>

          <section
            id="projects"
            className="px-4 py-20 lg:px-12 lg:py-24 scroll-mt-24"
            style={{ scrollMarginTop: "6rem" }}
          >
            <Projects />
          </section>
        </main>
      </div>
    </div>
  );
}
