import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Developers from "./components/Developers";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Developers />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
