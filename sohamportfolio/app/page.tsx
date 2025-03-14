import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div id="about" className="pt-16">
          <Hero />
        </div>
        <div id="skills" className="pt-16">
          <Skills />
        </div>
        <div id="projects" className="pt-16">
          <Projects />
        </div>
        <div id="education" className="pt-16">
          <Education />
        </div>
        <div id="contact" className="pt-16">
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  )
}

