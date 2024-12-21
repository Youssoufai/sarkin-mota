import About from "./components/About";
import Box from "./components/Box";
import Contact from "./components/Contact";
import Deals from "./components/Deals";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tile from "./components/Tile";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tile />
      <Box />
      <Features />
      <About />
      <Deals />
      <Contact />
      <Footer />
    </>
  );
}
