/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Fancybox from "../components/Fancybox";
import siteOne from "../assets/imgs/site-inspo-1.png";
import siteTwo from "../assets/imgs/site-inspo-2.png";
import siteThree from "../assets/imgs/site-inspo-3.png";

function ArtEleonoir() {
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
                  <h5>eleonoir.art </h5>
                  <div className="hero-wrapper">
                    <div>
                      <p className="hero-description">
                        <a
                          href="https://bsky.app/profile/arteleonoir.bsky.social"
                          target="_blank"
                        >
                          Eleonoir
                        </a>{" "}
                        was the first ever person to approach me about making a
                        website for her growing art portfolio. She had a few
                        special requests.
                      </p>
                      <p className="hero-description">
                        Site link:{" "}
                        <a href="https://eleonoir.art">eleonoir.art</a>{" "}
                      </p>
                    </div>
                    <div className="hero-chibi"></div>
                  </div>
                </header>
                <div className="hero">
                  <div className="hero-wrapper">
                    <div>
                      <h3>Design:</h3>
                      <p className="hero-description">
                        When Eleonoir approached me about making the site, at
                        first I was a little skeptical. Her dream site was
                        something straight out of the early 2000s, and my
                        experience and expertise is in modern design.
                        Nevertheless, I took the request as a challenge for my
                        design skills.
                      </p>
                      <p className="hero-description">
                        She sent me a few inspirations to work from. Here are a
                        couple:
                      </p>
                      <Fancybox
                        id="fancybox"
                        options={{
                          Carousel: {
                            infinite: false,
                          },
                        }}
                      >
                        <div className="img-gallery-container">
                          <a
                            data-fancybox="gallery"
                            href={siteOne}
                            className="img-gallery"
                          >
                            <img src={siteOne} width="250" height="200" />
                          </a>
                          <a
                            data-fancybox="gallery"
                            href={siteTwo}
                            className="img-gallery"
                          >
                            <img src={siteTwo} width="250" height="200" />
                          </a>
                          <a
                            data-fancybox="gallery"
                            href={siteThree}
                            className="img-gallery"
                          >
                            <img src={siteThree} width="250" height="200" />
                          </a>
                        </div>
                      </Fancybox>
                      <p className="hero-description">
                        As you can see, they're quite kitschy. That said, I did
                        feel inspired by them. Eleonoir mentioned that she
                        wanted three main sections to her site:
                      </p>
                      <ul className="hero-description">
                        <li>
                          A place to show off her digital art, which is her main
                          focus.
                        </li>
                        <li>Somewhere to put her 3D work.</li>
                        <li>
                          A section dedicated to a future possible print shop.
                        </li>
                      </ul>
                      <p className="hero-description">
                        She didn't have any 3D work to display, nor a shop to
                        link to at the time of requesting a site, but she
                        insisted that I add the sections with little under
                        construction tags, which I feel like adds to the early
                        2000s feel.
                      </p>
                      <p className="hero-description">
                        The sort of three-poster design language of the landing
                        page was inspired by the Darkside website in the first
                        image. I was going to vary the height, but she was happy
                        with the evenly-aligned sections.
                      </p>
                      <p className="hero-description">
                        Another request that I must admit made for amazing
                        design language was her desire to give every photo on
                        the site a bit of grayscale filter (about 50% I think),
                        and have the grayscale removed on hover for a real pop
                        of color.
                      </p>
                      <p className="hero-description">
                        Speaking of on-hover effects, the pricing structure
                        boxes each have faded examples of the different options,
                        and those fade in to 100% on hover.
                      </p>
                      <h3>Implementation:</h3>
                      <p className="hero-description">
                        While I wish that I could say that I chose to make
                        Eleonoir's site with vanilla HTML/CSS/JS, it was more a
                        matter of my inexperience with React at the time.
                        Looking back on it, React would've worked really well
                        for her site, and as a part of the maintenance of the
                        site, I plan on refactoring it into react down the line
                        for better maintainability.
                      </p>
                      <p className="hero-description">
                        The image popup and lightbox was achieved by using{" "}
                        <a
                          href="https://fancyapps.com/fancybox/"
                          target="_blank"
                        >
                          Fancybox
                        </a>
                        . Fancyapps offers a few Javascript UI components for
                        images, and Fancybox is my favorite. It allows for
                        swiping as well as pinch-to-zoom on touch devices, so
                        it's really compatible across devices.
                      </p>
                      <p className="hero-description">
                        For hosting, as with all sites I make, I host her site
                        on Netlify.
                      </p>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <aside className="post-sidebar">
            <div className="post-sidebar-content">
              <section className="post-sidebar-section">
                <h3>Published</h3>
                <div className="post-sidebar-offset">
                  <p>February 6, 2025</p>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default ArtEleonoir;
