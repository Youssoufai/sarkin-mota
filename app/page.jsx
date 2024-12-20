import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tile from "./components/Tile";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tile />
      <Features />
      <About />
    </>
  );
}
