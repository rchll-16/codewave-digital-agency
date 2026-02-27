import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import GetAQuoteModal from "./components/modal/GetAQuoteModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Header />

      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Services />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact onOpenModal={() => setIsModalOpen(true)} />
      </main>

      <Footer />

      <GetAQuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
