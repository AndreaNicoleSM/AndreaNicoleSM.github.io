/* eslint-disable react/no-unescaped-entities */
import Chibi from "../assets/imgs/sophchibi2.webp";

function OverviewContent() {
  return (
    <>
      <header className="hero hero-index">
        <h1>Hey, I'm Andréa!</h1>
        <div className="hero-wrapper">
          <div>
            <p className="hero-description">
              I'm a self-taught front-end web developer, and I'm currently
              working on learning React to create more complex web app projects.
              I've been making websites as a hobby since my family first got a
              computer when I was young, and it's been amazing to see how
              website design has advanced since.
            </p>
            <p className="hero-description">
              I enjoy gaming, learning new languages, and spending time with my
              wife. My favorite genre of games are MMOs, but I love to dabble in
              just about everything, from survival horror to retro. I'm also a
              big fan of TTRPGs. The chibi on the right was a commission for my
              character in the campaign I'm currently in (credit:{" "}
              <a
                href="https://bsky.app/profile/arteleonoir.bsky.social"
                target="_blank"
              >
                @arteleonoir
              </a>{" "}
              ).{" "}
            </p>
            <p className="hero-description">
              Welcome to my cozy little corner of the internet! On this site, I
              will be posting write-ups on completed projects, works in
              progress, and what I'm currently obsessing over. The goal is to
              develop my skills and share my journey!
            </p>
          </div>
          <div className="hero-chibi">
            <img onContextMenu="none" className="" src={Chibi} alt="" />
          </div>
        </div>
      </header>
      <div className="hero-wrapper overview-section">
        <div>
          <a href="notes.html">
            <h5 className="section-header-link">Notes</h5>
          </a>
          <p className="hero-description">
            The place for general updates. I will post life updates as well as
            project-related shenanigans and site upgrades.
          </p>
          <div className="section-content-wrapper">
            <div className="side-line"></div>
            <div className="section-content">
              <a href="2024-retrospective.html">
                <h6 className="section-content-link">
                  Beginning of the Year Retrospective
                </h6>
              </a>
              <p className="hero-description">
                I reflect on 2024 and discuss my goals going into 2025.
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
          <a href="notes.html">
            <h5 className="section-header-link">Articles</h5>
          </a>
          <p className="hero-description">
            The place for more in-depth write-ups on projects I've taken on or
            things I'm passionate about.
          </p>
          <div className="section-content-wrapper">
            <div className="side-line"></div>
            <div className="section-content">
              <a href="ethics of ai.html">
                <h6 className="section-content-link">
                  On the Efficacy and Ethics of Generative AI
                </h6>
              </a>
              <p className="hero-description">
                I discuss my belief that the use of generative AI -- whether it
                is to create images, a story, voices for unvoiced NPC dialogue,
                designs, or code -- is ethically and morally ambiguous at best.
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
    </>
  );
}

export default OverviewContent;
