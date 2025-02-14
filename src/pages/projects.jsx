/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import ProjectSection from "../components/project-section";

function Projects() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <div className="content-sub-wrapper">
          <div className="main-wrapper">
            <div className="main-container">
              <main className="main-content page">
                <header className="hero hero-index">
                  <h5>Projects</h5>
                  <div className="hero-wrapper">
                    <div>
                      <p className="hero-description">
                        This is where you can find a link to every project I've
                        completed and am proud of, regardless of the tech stack.
                        All of my work is open-source, save for contract work,
                        so if you're interested, take a look at{" "}
                        <a
                          href="https://github.com/AndreaNicoleSM"
                          target="_blank"
                        >
                          my Github
                        </a>
                        .
                      </p>
                    </div>
                    <div className="hero-chibi"></div>
                  </div>
                </header>
                <ProjectSection />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
