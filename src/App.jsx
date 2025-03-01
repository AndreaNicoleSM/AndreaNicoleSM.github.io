import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router";
import Overview from "./pages/overview";
import Notes from "./pages/notes";
import Articles from "./pages/articles";
import Projects from "./pages/projects";
import Me from "./pages/me";
import Retrospective2024 from "./pages/retrospective2024";
import EthicsOfAI from "./pages/ethics-of-ai";
import Layout from "./Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home";
import SiteRefactor from "./pages/site-refactor";
import Pricing from "./pages/pricing";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/me" element={<Me />} />
          <Route path="/retrospective-2024" element={<Retrospective2024 />} />
          <Route path="/ethics-and-efficacy-of-ai" element={<EthicsOfAI />} />
          <Route path="/site-refactor" element={<SiteRefactor />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
