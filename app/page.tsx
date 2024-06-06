import Hero from "@/app/components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
    </div>
  );
}
