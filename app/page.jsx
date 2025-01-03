import About from "./components/About";
import Box from "./components/Box";
import Client from "./components/Client";
import Contact from "./components/Contact";
import Curve from "./components/Curve";
import Deals from "./components/Deals";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Luxury from "./components/Luxury";
import Tile from "./components/Tile";

export default function Home() {
  return (
    <>
      <Hero />
      <Curve />
      <Box />
      <Features />
      <About />
      <Deals />
      <Client />
      <Contact />
    </>
  );
}
