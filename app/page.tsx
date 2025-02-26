import Navbar from '../app/components/Navbar';
import Hero from '../app/components/Hero';
import Experience from '../app/components/Experience';
import Skills from '../app/components/Skills';
import Projects from '../app/components/Projects';
import Education from '../app/components/Education';

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-8">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </main>
  )
}