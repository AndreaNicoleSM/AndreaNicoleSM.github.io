import NavbarAlt from "../components/navbar-alt";
import Hero from "../components/hero";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import { Contact } from "../components/contact";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Hero />
      <NavbarAlt />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
