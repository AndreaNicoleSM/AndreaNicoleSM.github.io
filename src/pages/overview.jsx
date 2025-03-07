/* eslint-disable react/no-unescaped-entities */
import Chibi from "../assets/imgs/sophchibi2.webp";
import { Link } from "react-router";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

function Overview() {
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
                  <h1>Hey, I'm Andréa!</h1>
                  <div className="hero-wrapper">
                    <div>
                      <p className="hero-description">
                        Welcome to my cozy little corner of the internet! On
                        this site, I will be posting write-ups on completed
                        projects, works in progress, and what I'm currently
                        obsessing over. The goal is to develop my skills and
                        share my journey!
                      </p>
                      <p className="hero-description">
                        Additionally, I developed this blog to be the antithesis
                        to the mainstream AI-driven professional hivemind that
                        is front-end development in 2025. This is my space to be
                        genuine, and my hope is that somebody, anybody reading
                        this can connect or relate either to myself or the
                        content that I create.
                      </p>
                      <p className="hero-description">
                        On that note, I'm a self-taught front-end web developer,
                        and I'm currently working on strengthening my skills
                        with React to create more beautiful, complex web app
                        projects than before. I've been making websites as a
                        hobby since my family got our first computer back in the
                        early 2000s, and it's been amazing to see how website
                        design has advanced since.
                      </p>
                      {/* <p className="hero-description">
                        I enjoy gaming, learning new languages, and spending
                        time with my wife. My favorite genre of games are MMOs,
                        but I love to dabble in just about everything, from
                        survival horror to retro. I'm also a big fan of TTRPGs.
                        The chibi was a commission for my character in the
                        campaign I'm currently taking part in (credit:{" "}
                        <a
                          href="https://bsky.app/profile/arteleonoir.bsky.social"
                          target="_blank"
                        >
                          @arteleonoir
                        </a>{" "}
                        ).{" "}
                        </p> */}
                    </div>
                    <div className="hero-chibi">
                      <img
                        onContextMenu="none"
                        className=""
                        src={Chibi}
                        alt=""
                      />
                    </div>
                  </div>
                </header>

                <div className="hero-wrapper overview-section">
                  <div>
                    <Link to="/notes">
                      <h5 className="section-header-link">Notes</h5>
                    </Link>
                    <p className="hero-description">
                      The place for general updates. I will post life updates as
                      well as project-related shenanigans and site upgrades.
                    </p>
                    <div className="section-content-wrapper">
                      <div className="side-line"></div>
                      <div className="section-content">
                        <Link to="/notes/site-refactor">
                          <h6 className="section-content-link">
                            Site Refactor: React
                          </h6>
                        </Link>
                        <p className="hero-description">
                          I talk about my experience with refactoring my
                          portfolio site and this blog from vanilla HTML, CSS &
                          Javascript into React.js.
                        </p>
                        <div className="tags">
                          <div className="tag professional-tag">
                            <p>Professional</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="section-content-wrapper">
                      <div className="side-line"></div>
                      <div className="section-content">
                        <Link to="/notes/retrospective-2024">
                          <h6 className="section-content-link">
                            Beginning of the Year Retrospective
                          </h6>
                        </Link>
                        <p className="hero-description">
                          I reflect on 2024 and discuss my goals going into
                          2025.
                        </p>
                        <div className="tags">
                          <div className="tag personal-tag">
                            <p>Personal</p>
                          </div>
                          <div className="tag professional-tag">
                            <p>Professional</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero-chibi"></div>
                </div>
                <div className="hero-wrapper overview-section">
                  <div>
                    <Link to="/articles">
                      <h5 className="section-header-link">Articles</h5>
                    </Link>
                    <p className="hero-description">
                      The place for more in-depth write-ups on projects I've
                      taken on or things I'm passionate about.
                    </p>
                    <div className="section-content-wrapper">
                      <div className="side-line"></div>
                      <div className="section-content">
                        <Link to="/articles/ethics-and-efficacy-of-ai">
                          <h6 className="section-content-link">
                            On the Efficacy and Ethics of Generative AI
                          </h6>
                        </Link>
                        <p className="hero-description">
                          I discuss my belief that the use of generative AI --
                          whether it is to create images, a story, voices for
                          unvoiced NPC dialogue, designs, or code -- is
                          ethically and morally ambiguous at best.
                        </p>
                        <div className="tags">
                          <div className="tag professional-tag">
                            <p>Professional</p>
                          </div>
                          <div className="tag opinion-tag">
                            <p>Opinion</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero-chibi"></div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
