import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return (
    <>
      <Analytics />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
