/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-title">
          <Link className="sidebar-title-link" to="/">
            <h1>Andréa Melo</h1>
          </Link>
        </div>
        <div className="sidebar-section">
          <h3>Welcome!</h3>
          <p>
            I'm Andréa, front-end web developer and web designer. This is my
            blog!
          </p>
        </div>
        <div className="sidebar-section">
          <h3>Keep up with me</h3>
          <p>
            If you would like to say hello or show me what you're up to, I'm on{" "}
            <a
              href="https://bsky.app/profile/andreamelodev.bsky.social"
              target="_blank"
            >
              Bluesky
            </a>
          </p>
        </div>
        <div className="sidebar-section">
          <h3>Work with me</h3>
          <p>
            If you like my work and you're willing to take a chance on me, fill
            out my{" "}
            <HashLink smooth to="/#contact" target="_blank">
              contact form
            </HashLink>{" "}
            and I will get back to you!
          </p>
        </div>
        <div className="sidebar-section">
          <h3>Recent Posts</h3>
          <ul className="post-links">
            <li>
              <Link to="/site-refactor">Site Refactor: React</Link>
            </li>
            <li>
              <Link to="/ethics-and-efficacy-of-ai">
                On the Efficacy and Ethics of Generative AI
              </Link>
            </li>
            <li>
              <Link to="/retrospective-2024">
                Beginning of the Year Retrospective
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3>Buy me a coffee</h3>
          <p>
            If you enjoy what I do or you're just feeling generous, I have a{" "}
            <a href="https://ko-fi.com/andreamelo" target="_blank">
              Ko-fi
            </a>
            !
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
