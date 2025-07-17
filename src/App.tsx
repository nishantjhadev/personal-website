import { useState } from "react"; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import Expertise from './components/Expertise';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useSmoothScroll from './hooks/useSmoothScroll';
import ChatSlider from "./components/ChatSlider";

function App() {
  useSmoothScroll();
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      {/* <Expertise /> */}
      <Publications />
      <Contact />
      <Footer />

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center">
        <button
          onClick={() => setIsChatOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg p-1 text-xl flex items-center justify-center"
          aria-label="Open Chat"
        >
          <img src="/profile_pic.jpg" alt="Chat" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow" />
        </button>
        <span className="mt-2 text-xs font-medium text-indigo-700 bg-white bg-opacity-90 px-2 py-1 rounded shadow">Chat with me</span>
      </div>

      {/* Chat Slider */}
      <ChatSlider isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;