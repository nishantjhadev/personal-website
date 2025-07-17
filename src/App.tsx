import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useSmoothScroll from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      {/* <Expertise /> */}
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;