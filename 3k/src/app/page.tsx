import Image from "next/image";
import React from "react";

// Portfolio Site with Header, Projects, and Footer
export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 gap-16 sm:p-20">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-5xl font-bold">Your Name</h1>
        <p className="text-lg text-gray-500">Full-Stack Developer & Tech Enthusiast</p>
      </header>

      {/* Projects Section */}
      <main className="flex flex-wrap gap-8 justify-center">
        {[{
          title: "Project One",
          description: "A cool web app using Next.js.",
          link: "https://example.com"
        }, {
          title: "Project Two",
          description: "An innovative mobile solution.",
          link: "https://example.com"
        }].map((project, index) => (
          <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-500 mb-3">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center py-4 border-t">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Kidus Michaél. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
