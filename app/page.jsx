import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
    </>
  );
}
