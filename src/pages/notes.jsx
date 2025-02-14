import { Link } from "react-router";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

function Notes() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <div className="content-sub-wrapper">
          <div className="main-wrapper">
            <div className="main-container">
              <main className="main-content page">
                <header className="hero hero-index hero-underline">
                  <h5>Notes</h5>
                  <div className="hero-wrapper">
                    <div>
                      <p className="hero-description">
                        This is the spot for general updates. I will post life
                        updates as well as project-related shenanigans and site
                        upgrades.
                      </p>
                    </div>
                    <div className="hero-chibi"></div>
                  </div>
                </header>
                <div className="hero">
                  <h6>2025</h6>
                  <Link to="/retrospective-2024">
                    Beginning of the Year Retrospective
                  </Link>{" "}
                  <br />
                  <br />
                  <Link to="/site-refactor">Site Refactor: React</Link>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
