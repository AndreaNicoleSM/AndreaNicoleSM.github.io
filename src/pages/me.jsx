/* eslint-disable react/no-unescaped-entities */
import Ether from "../assets/imgs/ether.webp";
import Selfie from "../assets/imgs/selfie.webp";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

function Me() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <div className="content-sub-wrapper">
          <div className="main-wrapper">
            <div className="main-container">
              <main className="main-content page">
                <header className="hero hero-index hero-reverse">
                  <h5 className="me-title-txt">About me</h5>
                  <div className="hero-wrapper reverse">
                    <div>
                      <p className="hero-description">
                        My name is Andréa Melo, and I'm currently working as a
                        free-lance web developer and designer. My main interest
                        lies in making pretty, modern websites mostly, but my
                        very first ever commission was a retro, early-2000s era
                        website. I love programming and development in general,
                        so I also dabble in Python and occasionally Java.
                      </p>
                      <p className="hero-description">
                        I'm a queer woman with a beautiful wife and four cats
                        whom I love very much. I'm originally from Pittsburgh,
                        PA, but I'm a free spirit who has recently had the
                        privilege of moving across the equator to Brazil, where
                        my wife and her family are. More information about that
                        in <a href="2024-retrospective.html">this post</a>!
                      </p>
                      <p className="hero-description">
                        I created this blog adjacent to my Portfolio because
                        I've always wanted a place where I could truly express
                        myself. I want this space not just to show the things
                        I've done, but to show my passion and expression in its
                        execution. It's my opinion that if you eschew everything
                        that makes you uniquely you in the name of perfect
                        professionalism, then you've lost an important part
                        yourself.
                      </p>
                      <p className="hero-description">
                        I struggle with face-to-face social interactions, but
                        I've found over the years that I can truly be myself
                        online. That's why this space is so great for me! It
                        gives me a medium through which I can show the world who
                        I am and what I can do. It's my own cozy corner of the
                        internet!
                      </p>
                      <p className="hero-description">
                        As I grow the site, it will give me the ability to add
                        comment sections and other fun features.
                      </p>
                    </div>
                    <div>
                      <img className="hero-chibi" src={Selfie} alt="" />
                    </div>
                  </div>
                </header>
                <div className="hero">
                  <div className="hero-wrapper">
                    <div>
                      <img className="hero-chibi" src={Ether} alt="" />
                    </div>
                    <div>
                      <h6>Cats</h6>
                      <p className="hero-description">
                        I'm an animal lover at heart (I mean, who isn't,
                        right?), so when I met the woman who would eventually
                        become my wife, all it took for her to slide into my DMs
                        was an offer of pictures of her cats. Fast forward
                        several years and I ended up becoming their mommy too.
                      </p>
                      <p className="hero-description">
                        Cats: <br />- <em>Hell</em> (yes, that's her name).
                        Long-haired black cat. loves belly rubs and licking
                        walls. Acts like a dog <br />- <em>Ether</em>. Fluffy,
                        long-haired, white and brown. Has no mind her of her
                        own. Will lay on your lap for hours. <br />-{" "}
                        <em>Nina</em>. Short-haired white and gray. A literal
                        princess. Has allergies and will sneeze in your face.{" "}
                        <br />- <em>Chuva</em>. Domestic short-hair. Literal
                        demon. Is not afraid to put you in your place, but all
                        is forgiven when it's bed time.
                      </p>
                      <p className="hero-description">
                        I never knew that I could love anything as much as I
                        love these little creatures. As you can see by the
                        accompanying picture (that's Ether by the way), the wife
                        and I enjoy taking pictures of our babies at silly
                        angles. Still, somehow they come out looking adorable
                        regardless of how we frame them.
                      </p>
                      <p className="hero-description">
                        If you're reading this and you're a cat lover too, tag
                        me in your cat pics over on{" "}
                        <a
                          href="https://bsky.app/profile/andreamelodev.bsky.social"
                          target="_blank"
                        >
                          BlueSky
                        </a>
                        !
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hero">
                  <div className="hero-wrapper">
                    <div>
                      <h6>Gaming</h6>
                      <p className="hero-description">
                        I've been playing video games since I was about three
                        years old. My oldest memory is of Ocarina of Time, and
                        gaming has been both a pastime and an escape for me my
                        whole life. I am fortunate enough to have a wife who
                        shares that experience, so we often play video games
                        together. In fact, we met in Final Fantasy XIV in the
                        Limsa Lominsa aetheryte plaza.
                      </p>
                      <p className="hero-description">
                        MMOs hold a special place in my heart for that reason,
                        and so my wife and I have made it our mission to play
                        just about every MMO we can -- JoshStrifeHayes style! We
                        might not play any particular MMO for more than a few
                        hours, but there are two MMOs we go back to time and
                        time again: Guild Wars 2 and Final Fantasy XI. There's
                        something about those two games that just thoroughly
                        captured our hearts.
                      </p>
                      <p className="hero-description">
                        Currently playing: <br />- <em>Silent Hill 2 Remake</em>{" "}
                        <br />- <em>Final Fantasy IX</em> <br />-{" "}
                        <em>Hollowbody</em>
                      </p>
                      <p className="hero-description">
                        Plan to play soon: <br />- <em>Final Fantasy XI</em>{" "}
                        <br />- <em>WoW Ascension: Conquest of Azeroth</em>{" "}
                        <br />- <em>Pathfinder: Wrath of the Righteous</em>
                      </p>
                      <p className="hero-description">
                        My wife introduced me to the world of TTRPGs (Table Top
                        Role Playing Games) within the last couple of years, and
                        they're an absolute blast. She introduced me to Dungeons
                        and Dragons first, hooking me in with Critical Role.
                        But, because she'd been a game master for years and has
                        GM'd several sessions of her own, she offered to make a
                        campaign for me to just dip my toes into the TTRPG
                        space. Two years later and we've started close to a
                        dozen Pathfinder 2e campaigns. Now I'm a regular TTRPG
                        junkie.
                      </p>
                      <p className="hero-description">
                        Because we're both so passionate about games, and we
                        both had a dream of growing up to make games when we
                        were younger, we're in the planning phase of creating
                        our own! We're planning on developing it using the Godot
                        engine, both because it's free / open source and because
                        it's python adjacent, and I'm comfortable and familiar
                        with Python's syntax.
                      </p>
                    </div>
                    <div></div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Me;
