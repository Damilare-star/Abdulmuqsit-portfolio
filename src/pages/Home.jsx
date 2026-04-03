import Hero from '../components/Hero';
import FeaturedProject from '../components/FeaturedProject';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ThreeBackground from '../components/ThreeBackground';

const Home = () => {
  return (
    <>
      <ThreeBackground />
      <Hero />
      <FeaturedProject />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
