/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

function SiteRefactor() {
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
                  <h5>Site Refactor: React </h5>
                  <div className="hero-wrapper">
                    <div>
                      <p className="hero-description">
                        Just recently I finished refactoring my entire site into
                        React, and it was such a learning experience that I felt
                        like I should share some of what I learned!
                      </p>
                    </div>
                    <div className="hero-chibi"></div>
                  </div>
                </header>
                <div className="hero">
                  <div className="hero-wrapper">
                    <div>
                      <h3>Recap:</h3>
                      <p className="hero-description">
                        I will begin by saying that I first learned the basics
                        of React.js maybe two years ago, but since then I had
                        become rusty and unfamiliar with it. When I originally
                        built my site last year, it was a one-page portfolio
                        site. As such, I didn't feel that it needed anything
                        fancy, so I used simple HTML, CSS, and JS to get the job
                        done. Over time and after much research and debate, I
                        found the idea of making a blog to be quite compelling.
                        So, I decided to just build it on top of what I had
                        already created.
                      </p>
                      <p className="hero-description">
                        The problem? Unlike my portfolio page, this blog has a
                        persistent UI. This meant that if I made even a simple
                        change, like adding an article link to the sidebar, I
                        would have to go through each HTML file and manually add
                        it. It was tedious, and I knew at that point that it
                        would be more efficient to just re-learn the basics of
                        react so I could create functional components for the UI
                        elements. I had figured that the refactoring process
                        might present some challenges, but for the most part I
                        assumed it would be a sort of copy/paste plug-n-play
                        situation. I couldn't have been more wrong.
                      </p>
                      <p className="hero-description">
                        The first real challenge I faced was the fact that my
                        CSS from the original project was a cobbled-together
                        mess. Because of the way React handles CSS files, I
                        couldn't just slot in both files and have it working
                        perfectly, because some styles conflicted. This meant
                        that for me to effectively convert the site over, I had
                        to start with a blank CSS file and individually assess
                        each element and class. This took the bulk of my time
                        over the last half week or so, but the result was quite
                        worth it.
                      </p>
                      <p className="hero-description">
                        Even after I managed to get all the CSS in order and had
                        the components done, there were several issues that
                        propped up which didn't exist in my initial build. The
                        first of which was the matter of switching pages when
                        there was only one effective HTML file. This lead me to
                        learn React Router, which is one of the most handy tools
                        I came across. It essentially lets you set up a
                        framework of your website or app, and with its powerful
                        API you can easily switch between page components. The
                        best use I found was its ability to let you set up a
                        layout for your UI components that you can then make a
                        parent element to your pages so that the app doesn't
                        need to re-render your UI every time. Unfortunately,
                        because the design of my portfolio page is so different
                        from the blog, the only component being rendered in the
                        layout is the mobile nav menu. Still, I find the feature
                        quite compelling, and I will definitely use it in future
                        projects.
                      </p>
                      <p className="hero-description">
                        Speaking of the mobile nav menu, I ran into more issues
                        with this on React than I did with vanilla HTML/CSS/JS.
                        When I added the CSS for the mobile nav then attempted
                        to test it, not only did it not stop the scrolling as my
                        previous build had, but it also didn't remain the only
                        visible component. For instance, if a user were to press
                        the mobile nav button while scrolled to the bottom of a
                        page, nothing would appear to happen, as the nav was
                        rendering toward the top of the page. I believe I fixed
                        this using position: fixed in the CSS, but then another
                        bug occurred where, if the user were scrolled to the
                        bottom of a page and attempted to navigate to another
                        page via the mobile nav, it would position the user's
                        viewport at the bottom of the page they were navigating
                        to.
                      </p>
                      <p className="hero-description">
                        I figured this was a consequence of how React handles
                        rendering of components, and wouldn't you know it, the
                        answer was React Router again. This time it was the
                        ScrollRestoration function that would save the day. I
                        had to create a javascript file to enforce scrolling to
                        the top of the page when a new page is rendered, but yet
                        again, there was another issue. When a user navigated to
                        another page under the same circumstances I just
                        described earlier, instead of their viewport rendering
                        at the bottom of the screen and leaving them there, it
                        would render at the bottom of the screen and scroll to
                        the top. This was a strange one, but the fix was simple.
                        I just had to unset the scroll behavior in the CSS for
                        the body and html.
                      </p>
                      <p className="hero-description">
                        With that, the mobile nav issues were a thing of the
                        past, but with the scroll behavior unset, if a user were
                        to use the post sidebar to navigate to a particular part
                        of an article, the jump would be instant and jarring.
                        That wasn't any good, so I checked the React Router
                        documentation and found the HashLink function. Not only
                        does it work in the same way an anchor tag would to take
                        you to a particular part of the page, but you're able to
                        pass it the 'smooth' property to dictate that when the
                        user clicks, it scrolls them smoothly to the
                        destination.
                      </p>
                      <p className="hero-description">
                        All was well and good, so I finished up by implementing
                        the Portuguese translations for my portfolio and ran npm
                        run build to create the prod folder for uploading. When
                        I checked the production deploy, none of my translations
                        were rendering. This, I found out, was yet another
                        consequence of using react. You see, the way I made
                        translations work before was by using the data.i18n=""
                        attribute and passing it a key. I had a script running
                        that performed several functions:
                      </p>
                      <ol className="hero-description">
                        <li>
                          Check user's browser language to choose the proper
                          json file (either en for English-speaking users or pt
                          for Portuguese speaking users).
                        </li>
                        <li>
                          Query selector every element with the i18n property.
                        </li>
                        <li>
                          Take the value of that i18n property and use it as a
                          key when comparing it to the selected json.
                        </li>
                        <li>
                          Insert the value of the associated key-value pair into
                          the element associated with the key.{" "}
                        </li>
                      </ol>
                      <p className="hero-description">
                        This had worked perfectly for my needs, but React didn't
                        play nice with it. Luckily, the solution was simple
                        enough to implement. i18next is a wonderful API that
                        allows you, with some configuration, to easily perform
                        all the functions mentioned above. The only hiccup I had
                        with it was that it would render any html element tags
                        as strings. Luckily, using hooks, you can use the built
                        in Trans function and pass in a custom element to be
                        swapped out. In the examples included with the
                        documentation, custom elements were usually just a
                        single number inside of element tags, so I chose to
                        follow suit and use 0 and 1 to replace a span element
                        and an anchor tag respectively.
                      </p>
                      <p className="hero-description">
                        And of course there were issues. The short of it is that
                        the 0 tag, while it worked to pass through the text
                        without any element tags around it, it refused to let me
                        style the text. I tried passing in a className to the
                        replacement, and when that failed, I tried inline CSS
                        (which also failed.) Then, I remembered seeing a blurb
                        in one random reply to someone else's question on
                        StackOverflow who had an issue with the 0 tag, so I
                        decided to try 2 instead. It worked.
                      </p>
                      <p className="hero-description">
                        So, I ran the build command one more time and deployed
                        the site. Everything worked exactly as I had originally
                        intended! While the refactor came with many issues,
                        learning how to overcome each one of them was such a
                        valuable experience that, in the end, I couldn't be
                        happier to have done it. I'm so familiar with the way
                        that React works now that all future projects I work on
                        will be made using React.
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
                  <p>February 13, 2025</p>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default SiteRefactor;
