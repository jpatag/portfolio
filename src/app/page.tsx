import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Accomplishments from '@/components/Accomplishments';
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
        <Portfolio />
        <Accomplishments />
        <Contact />
      </main>
    </>
  );
}
