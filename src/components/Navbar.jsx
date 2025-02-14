import Github from "./icons/github";
import Bluesky from "./icons/bluesky";
import { Link } from "react-router";
import ToggleMobileNav from "../pages/toggleMobileNav";
import Hamburger from "../assets/imgs/hamburger.png";
import Close from "../assets/imgs/close.png";

function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-title">
          <div className="navbar-title-content">
            <Link className="navbar-title-link" to="/">
              <h1>Andréa Melo</h1>
            </Link>
          </div>
        </div>
        <div className="navbar-wrapper">
          <div className="navbar-container">
            <div className="navbar-section navbar-empty-section"></div>
            <div className="navbar-section">
              <button
                onClick={ToggleMobileNav}
                id="toggle-nav"
                className="nav-menu-button"
              >
                <img
                  className="hamburger-menu-icon"
                  src={Hamburger}
                  alt=""
                  id="hamburger"
                />
                <img
                  className="inactive close-icon"
                  src={Close}
                  alt=""
                  id="close-btn"
                />
              </button>
              <nav className="navbar-menu navbar-items">
                <Link to="/overview">Overview</Link>
                <Link to="/notes">Notes</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/me">About me</Link>
              </nav>
              <nav className="social">
                <a
                  href="https://bsky.app/profile/andreamelodev.bsky.social"
                  target="_blank"
                >
                  <Bluesky />
                </a>
                <a href="https://github.com/AndreaNicoleSM" target="_blank">
                  <Github />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
