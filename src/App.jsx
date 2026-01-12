import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Discography from './components/Discography';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f0d]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Discography />
        <Timeline />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
