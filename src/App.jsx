import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Services from './components/Services';
import WorkProcess from './components/WorkProcess';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technologies />
        <Services />
        <WorkProcess />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
