import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Career from "@/components/Career";
import FamilyBackground from "@/components/FamilyBackground";
import InterestsValues from "@/components/InterestsValues";
import FutureGoals from "@/components/FutureGoals";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Career />
        <FamilyBackground />
        <InterestsValues />
        <FutureGoals />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
