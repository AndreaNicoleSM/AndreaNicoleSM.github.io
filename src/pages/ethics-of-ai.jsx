/* eslint-disable react/no-unescaped-entities */
import { HashLink } from "react-router-hash-link";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

function EthicsOfAI() {
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
                  <h5>On the Efficacy and Ethics of Generative AI</h5>
                  <div className="hero-wrapper">
                    <div>
                      <p className="hero-description">
                        {" "}
                        As a disclaimer, this is strictly an opinion piece and
                        as such it is not meant to be taken as a legitimate
                        resource. To be clear: I believe that generative AI does
                        more harm than good long-term. Its use is immoral and
                        unethical to start, and barring certain use cases in web
                        and software development, generative AI as a means to
                        produce large amounts of code is simply inefficient and
                        ineffective.
                      </p>
                      <p className="hero-description">
                        {" "}
                        <b>Summary:</b> I discuss my belief that the use of
                        generative AI -- whether it is to create images, a
                        story, voices for unvoiced NPC dialogue, designs, or
                        code -- is ethically and morally ambiguous at best.
                      </p>
                    </div>
                    <div className="hero-chibi"></div>
                  </div>
                </header>
                <div className="hero">
                  <div className="hero-wrapper">
                    <div>
                      <h6 id="a1-gen-ai">What is Generative AI?</h6>
                      <p className="hero-description">
                        In simple terms, generative artificial intelligence,
                        hereafter referred to as genAI, is a subsection of AI
                        technology that, with a simple user prompt, generates
                        text (incl. plain text *and* code), images, videos, etc.
                        For those who are unaware of how this works and without
                        getting terribly technical, genAI models use a process
                        known as{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Self-supervised_learning"
                          target="_blank"
                        >
                          self-supervised learning
                        </a>{" "}
                        to comb through large data sets and recognize underlying
                        patterns and structures in unlabeled data. Up until the
                        early 2020s, genAI was mostly restricted to{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Large_language_model"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          large language models
                        </a>{" "}
                        (LLMs) which deal with natural language processing.
                        However, with recent advancements and the addition of
                        newer datasets, the capabilities of genAI are growing.
                      </p>
                      <p className="hero-description">
                        For a deeper understanding of what genAI is, its
                        history, and what it can do, check out{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Generative_artificial_intelligence#Concerns"
                          target="_blank"
                        >
                          this wikipedia article
                        </a>
                        .
                      </p>
                      <p className="hero-description">
                        Now that you understand what genAI is, I would like to
                        touch upon its impact on art, development, voice acting,
                        and and discuss the ethics of its use.
                      </p>
                      <h6 id="a1-art">Art</h6>
                      <p className="hero-description">
                        It is becoming increasingly difficult to exist anywhere
                        on the internet without seeing AI-generated images. Even
                        despite my best efforts to curate my Youtube algorithm,
                        I continue to be served AI-generated thumbnails and
                        music. Pinterest is another, far more egregious example.
                        Despite the fact that I go out of my way to only click
                        on art that, upon visual inspection, seems legitimate
                        and human-made, I cannot avoid the onslaught of
                        AI-generated images.
                      </p>
                      <p className="hero-description">
                        More egregious still is the audacity of those who would
                        call this art. There are many who find the look of
                        AI-generated images to be pleasing, and while I
                        disagree, for the most part this is to be expected. As
                        mentioned above, genAI is trained on data sets, and with
                        genAI tools, one can add reference images and specific
                        prompts to achieve a certain look and feel. Like a
                        particular artist and want a piece that looks like they
                        drew it but you're too cheap to pay them for the real
                        thing? Why not use genAI to rip your favorite piece of
                        theirs?!
                      </p>
                      <p className="hero-description">
                        Now obviously that statement was satire and meant to be
                        taken with a metric ton of salt, but this mindset is far
                        too common amongst those who are neither artists nor
                        creatives, and it is becoming a real problem for artists
                        who rely on commission work as well as those employed
                        professionally.
                      </p>
                      <h7 id="a1-jobs">Jobs</h7>
                      <p className="hero-description">
                        It is no secret that artists and other creatives are
                        widely viewed as lesser despite their critical role in
                        most everything we consume today. If you need proof of
                        this, look no further than the 'starving artist' trope
                        and the way that university students who are in non-STEM
                        fields are treated. Artists get laid of en masse from
                        large corporations with such frequency that it rarely
                        makes it to the headlines anymore. But now, with advent
                        of genAI and its use for generating images, we are
                        seeing this issue magnify.
                      </p>
                      <p className="hero-description">
                        Online digital artists who have spent years of their
                        lives dedicated to their craft, even those who have
                        successfully navigated the ever-scrolling hellscape of
                        social media and worked long and hard to remain relevant
                        in the eyes of dopamine-addled masses, are having to
                        resort to creating content they otherwise wouldn't (i.e.
                        furry art, NSFW art, etc.) just to pay their bills.
                        Newer artists who are trying to eek out a living and
                        build their careers are being left by the wayside.
                      </p>
                      <p className="hero-description">
                        To circle back around to the industry professionals --
                        those who make the art for the video games we play, the
                        animated shows we watch, etc. -- companies are making
                        concerted efforts to create genAI models that train on
                        their artists' work, and while some union work is being
                        done to stifle pushes from upper management, many
                        artists are given an ultimatum: remain employed for a
                        while longer and have their art and life's work used to
                        develop a genAI model that will create bastardized
                        look-alikes of their work with the inevitability that
                        they will still lose their job, or find different
                        employment which is made an even more monumental task
                        than usual considering the current state of the creative
                        landscape.
                      </p>
                      <h7 id="a1-slop">'AI Slop'</h7>
                      <p className="hero-description">
                        My wife refers to AI-generated images as AI slop, and I
                        honestly couldn't think of a more accurate terminology
                        for it. She's not alone in feeling this way, either, as
                        the term has become more and more common of late. But
                        why that phrasing in particular?
                      </p>
                      <p className="hero-description">
                        While AI has come a great distance in the past couple of
                        years, and AI-generated images are becoming increasingly
                        difficult to spot, genAI has seen a plateauing of its
                        capability as far as image generation is concerned.
                        Duchess Celestia has a{" "}
                        <a
                          href="https://www.youtube.com/watch?v=0Nm7R1ufq_s&pp=ygUcZHVjaGVzcyBjZWxlc3RpYSBzcG90dGluZyBhaQ%3D%3D"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          comprehensive video
                        </a>{" "}
                        where she details the most common errors and qualities
                        inherent in AI-generated images. She compares and
                        contrasts these errors with human error to help arm the
                        viewer with knowledge such that they can more accurately
                        spot AI slop and distinguish between it and real art.
                      </p>
                      <p className="hero-description">
                        The bulk of what helps me spot AI from a distance is the
                        lighting and composition of any particular piece; GenAI
                        tends to create images with very similar lighting (which
                        often doesn't make sense compositionally) and it rarely
                        generates images where the subject is facing any
                        direction than forward and composed dead center. Failing
                        that, though, genAI is famous for adding extra digits
                        and appendages and the hair and clothing of subjects
                        tend to blend together into unrecognizable masses.
                      </p>
                      <h6 id="a1-webdev">Web and Software Development</h6>
                      <p className="hero-description">
                        While I admit I have little professional experience and
                        therefore cannot comment on the experience of working at
                        a tech company, I have consumed enough content around
                        the subject to have a grasp of the situation and form an
                        opinion. One of my favorite creators in the space is{" "}
                        <a
                          href="https://www.youtube.com/@albertatech"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Alberta Tech.
                        </a>
                      </p>
                      <p className="hero-description">
                        AI can be used in software development in{" "}
                        <a
                          href="https://github.com/resources/articles/ai/what-is-ai-code-generation"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          three key ways:
                        </a>
                      </p>
                      <ol className="hero-description">
                        <li className="hero-description-list">
                          Tab-accept autofill suggestions - You start typing and
                          the code editor gives you an unobtrusive suggestion
                          that can be accepted (most often by pressing tab).
                        </li>
                        <li className="hero-description-list">
                          Comment to generate suggestion - You type a comment in
                          natural language and the AI will suggest code for you.
                        </li>
                        <li className="hero-description-list">
                          AI chat bot - You type directly to the AI and request
                          code generation.{" "}
                        </li>
                      </ol>
                      <p className="hero-description">Let's talk about them:</p>
                      <p className="hero-description">
                        I personally find the tab-accept autofill suggestions to
                        be quite useful. It helps to cut down on the tedium and
                        increase productivity whilst still letting me take the
                        wheel. This particular flavor of genAI falls in line
                        with stuff like VSCode's Emmet for me. For those
                        unaware, Emmet is an incredibly powerful tool built into
                        VSCode that can create multiple elements from shorthand
                        syntax. If you are not using VSCode but that sounds
                        interesting,{" "}
                        <a href="https://code.visualstudio.com/docs/editor/emmet">
                          check here
                        </a>{" "}
                        for the official documentation.
                      </p>
                      <p className="hero-description">
                        Comment to code is significantly more ambiguous. On its
                        face, it would appear to be a souped up version of the
                        tab-accept autofill suggestions, but it isn't.
                        Commenting in plain language and receiving a block of
                        code in return is, in my view, just like going to
                        ChatGPT. Sure, you're only getting a small snippet of
                        code, and in that way you're more in control than you
                        would be if you asked ChatGPT to generate a website for
                        you, but the premise is the same.
                      </p>
                      <p className="hero-description">
                        As for chat bot code generation, I think my view is
                        quite clear. To speak to the efficacy of chatbots for
                        coding, I would refer to{" "}
                        <a href="https://www.youtube.com/shorts/zGBhsZHjqkU">
                          this video from PirateSoftware
                        </a>{" "}
                        wherein he recounts a conversation he had with an
                        individual who uses AI-generated code. The takeaway is
                        that sure, you generate the code very quickly, but
                        implementing it into your codebase and debugging it
                        would take longer than if you had just written it
                        yourself.
                      </p>
                      <h6 id="a1-va">Voice Acting and the Deepfake Problem</h6>
                      <p className="hero-description">
                        It shouldn't need to be said, but the use of genAI to
                        create videos of people or emulate somebody's voice is
                        dubious at best and abhorrent at worst. So, let's go
                        over some of the issues.
                      </p>
                      <p className="hero-description">
                        As regards the emulation of voices, the proliferation of
                        genAI can pose serious security risks. For content
                        creators, actors, and celebrities with large volumes of
                        digital media that includes the usage of their voice,
                        the fear of genAI being used to emulate their voice is
                        apparent. Take{" "}
                        <a
                          href="https://www.youtube.com/shorts/DqeZZ8ks_SI?feature=share"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          this video
                        </a>{" "}
                        for instance. Thor, who is a full-time content creator
                        in the game development space across multiple platforms,
                        had to call his bank and put a notice on file that no
                        transactions are to be done over the phone because his
                        voice is all over the internet and a simple AI can be
                        made to spoof his voice over the phone.
                      </p>
                      <p className="hero-description">
                        For those who have built their career on the use of
                        their voice as some of your favorite character from
                        video games and television, the threat of losing their
                        jobs to genAI is realer than ever. The most popular
                        MMORPG to date, World of Warcraft, has{" "}
                        <a
                          href="https://www.curseforge.com/wow/addons/voiceover"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          an add-on
                        </a>{" "}
                        that voices NPC dialogue using genAI. While it is true
                        that genAI voice models lack the depth and expression of
                        real voices, they still threaten those in the industry.
                        Big names like Jennifer Hale{" "}
                        <a
                          href="https://youtu.be/JWCbhgMUDjY"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          have added their voices
                        </a>{" "}
                        to the fight against the genAI craze that has been
                        sweeping the industry.
                      </p>
                      <p className="hero-description">
                        Deepfakes have been an issue for years now, and while
                        nobody disputes that they are bad, the problem only
                        continues compounding. It seems so common anymore to see
                        a headline about some celebrity falling victim to a
                        deepfake porn video that uses their likeness. The
                        consequences of this can be damaging for a celebrity's
                        reputation, certainly, but imagine what that could do to
                        someone of less notoriety. One deepfake can ruin a
                        person's marriage, their relationship, and their career.{" "}
                      </p>
                      <h6 id="a1-ethics">Ethics of the use of generative AI</h6>
                      <p className="hero-description">
                        I am of the opinion that there is no moral reasoning nor
                        ethical way to use genAI. A lot of the counter arguments
                        I have seen online revolve around the idea that because
                        somebody was compensated for the use of their
                        intellectual property and/or copyrighted material that
                        it makes it okay. My counter argument to this is exactly
                        what Jennifer Hale had said in an interview with{" "}
                        <a
                          href="https://variety.com/2024/tv/news/jennifer-hale-video-game-strike-sag-aftra-1236125843/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Variety
                        </a>
                        :
                      </p>
                      <div className="section-content-wrapper">
                        <div className="side-line"></div>
                        <div className="section-content">
                          <p>
                            "If you use something that originated in our body or
                            our voices, can we please get paid? Because now
                            you’re using technology to take away our ability to
                            feed our kids.
                          </p>
                          <p className="end-quote">
                            What I wish everyone would do was keep asking the
                            actual question, which is, ‘there’s a lot of money
                            being made here. Where is it going?’ And in the
                            current setup, the way our system operates, and this
                            whole idea of shareholder supremacy, it’s flowing to
                            the 1%. If you flow so much money, you can’t even
                            feed the people who made it possible.”
                          </p>
                        </div>
                      </div>
                      <p className="hero-description">
                        People are being put out of work by genAI. And that's
                        not the only ethical hurdle it faces, either.
                        Unscrupulous business practices have only increased
                        animosity as tech giants like Adobe, Twitter, and Meta
                        tried hide the fact that they started scraping their
                        platforms in updates and terms of service. Additionally,
                        they either make it mandatory or incredibly annoying to
                        opt out of. This means that artists who primarily use
                        social media are forced between a rock and a hard place
                        -- capitulate and let them scrape their work so they can
                        keep making money, or take down their posts and find
                        another way.
                      </p>
                      <p className="hero-description">
                        AI sycophants and pundits like to claim that the models
                        used to train their favorite AI model were ethically
                        procured, but at every turn we find that art ends up
                        appropriated in training datasets without ever being
                        properly licensed. And with no feasible way to know
                        exactly what is in a given AI model's data set, it is
                        next to impossible to say with any degree of certainty
                        that you're not just stealing from somebody.
                      </p>
                      <h6 id="a1-governance">Governance</h6>
                      <p className="hero-description">
                        I believe that there needs to be a comprehensive piece
                        of common-sense legislature passed to regulate the
                        proliferation of AI. US copyright law was built on the
                        fundamental principle that anything you create is yours
                        and yours alone. Whether you put pen to tablet, pencil
                        to paper, fingers to your keyboard, or lend your voice
                        to a character, those are copyrighted works by default.
                        This website and its code (while completely public and
                        open source) would technically be copyright-protected.
                      </p>
                      <p className="hero-description">
                        Without any regulatory measures in place, and
                        considering the current state of US politics right now I
                        won't hold out any hope, genAI will continue to displace
                        the very people its stealing from.
                      </p>
                      <h6 id="a1-conclusion">Conclusion</h6>
                      <p className="hero-description">
                        Considering what I said above, I cannot ever see myself
                        using genAI in good conscience. There are far too many
                        ethical problems with its creation, proliferation, and
                        use for me to consider it conscionable under any
                        circumstances, and I hope that if you're reading this,
                        you don't either. Naturally, I will never judge somebody
                        solely on the basis that they use AI, because they may
                        not be aware of the implications and trappings of it,
                        but I can promise that I will never use it or anything
                        generated by it knowingly.{" "}
                      </p>
                    </div>
                    <div className="hero-chibi"></div>
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
              <section className="post-sidebar-section">
                <div className="table-of-contents">
                  <h3>Contents</h3>
                  <div className="post-sidebar-offset contents-section">
                    <ul>
                      <li>
                        <HashLink smooth to="Hash#a1-gen-ai">
                          What is Generative AI?
                        </HashLink>
                      </li>
                      <li>
                        <HashLink smooth to="#a1-art">
                          Art
                        </HashLink>
                      </li>
                      <ul>
                        <li>
                          <HashLink smooth to="#a1-jobs">
                            Jobs
                          </HashLink>
                        </li>
                        <li>
                          <HashLink smooth to="#a1-slop">
                            'AI Slop'
                          </HashLink>
                        </li>
                      </ul>
                      <li>
                        <HashLink smooth to="#a1-webdev">
                          Web and Software Dev
                        </HashLink>
                      </li>
                      <li>
                        <HashLink smooth to="#a1-va">
                          Voice Acting & Deepfake
                        </HashLink>
                      </li>
                      <li>
                        <HashLink smooth to="#a1-ethics">
                          Ethics of genAI
                        </HashLink>
                      </li>
                      <li>
                        <HashLink smooth to="#a1-governance">
                          Governance
                        </HashLink>
                      </li>
                      <li>
                        <HashLink smooth to="#a1-conclusion">
                          Conclusion
                        </HashLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default EthicsOfAI;
