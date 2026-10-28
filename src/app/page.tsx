import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";
import { Process } from "@/components/Process";
import { Demos } from "@/components/Demos";
import { Testimonials } from "@/components/Testimonials";
import { Tagline } from "@/components/Tagline";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Why />
        <Process />
        <Demos />
        <Testimonials />
        <Tagline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
