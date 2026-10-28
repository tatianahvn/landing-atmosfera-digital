import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Why } from "@/components/Why";
import { Process } from "@/components/Process";
import { Cases } from "@/components/Cases";
import { Testimonial } from "@/components/Testimonial";
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
        <Cases />
        <Testimonial />
        <Tagline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
