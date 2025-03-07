/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

function Articles() {
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
                  <h5>Articles</h5>
                  <div className="hero-wrapper">
                    <div>
                      <p className="hero-description">
                        This is the place for more in-depth write-ups on
                        projects I've taken on or things I'm passionate about
                      </p>
                    </div>
                    <div className="hero-chibi"></div>
                  </div>
                </header>
                <div className="hero">
                  <h6>2025</h6>
                  <Link to="/articles/ethics-and-efficacy-of-ai">
                    On the Efficacy and Ethics of Generative AI
                  </Link>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
