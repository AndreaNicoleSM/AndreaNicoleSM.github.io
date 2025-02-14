import Rocket from "../assets/imgs/rocket.png";
import Device from "../assets/imgs/devices.png";
import Lightbulb from "../assets/imgs/lightbulb.png";
import Language from "../assets/imgs/language.png";
import Hex from "../assets/imgs/img-hex.png";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <section id="about">
        <div className="header-wrapper flex-col">
          <h2>{t("section_about")}</h2>
          <div className="underline"></div>
        </div>
        <div className="attribute-wrapper flex-row">
          <div className="attributes flex-col">
            <img src={Device} alt="" className="attribute-img" />
            <div className="textblock flex-col">
              <h3>{t("attribute_1")}</h3>
              <p>{t("attribute_1_txt")}</p>
            </div>
          </div>
          <div className="attributes flex-col">
            <img src={Language} alt="" className="attribute-img" />
            <div className="textblock flex-col">
              <h3>{t("attribute_2")}</h3>
              <p>{t("attribute_2_txt")}</p>
            </div>
          </div>
          <div className="attributes flex-col">
            <img src={Lightbulb} alt="" className="attribute-img" />
            <div className="textblock flex-col">
              <h3>{t("attribute_3")}</h3>
              <p>{t("attribute_3_txt")}</p>
            </div>
          </div>
          <div className="attributes flex-col">
            <img src={Rocket} alt="" className="attribute-img" />
            <div className="textblock flex-col">
              <h3>{t("attribute_4")}</h3>
              <p>{t("attribute_4_txt")}</p>
            </div>
          </div>
        </div>
        <div className="personal-skills-wrapper flex-row">
          <div className="personal-info flex-col">
            <img className="bio-img" src={Hex} alt="" />
            <div className="flex-col">
              <h3 className="bio-text">{t("bio_header")}</h3>
              <p>{t("bio_txt")}</p>
            </div>
          </div>
          <div className="skills-wrapper flex-col">
            <div className="bar">
              <div className="fill-100">
                <div className="labels">HTML</div>
              </div>
            </div>
            <div className="bar">
              <div className="fill-100">
                <div className="labels">CSS</div>
              </div>
            </div>
            <div className="bar">
              <div className="fill-100">
                <div className="labels">Javascript</div>
              </div>
            </div>
            <div className="bar">
              <div className="fill-90">
                <div className="labels">React</div>
              </div>
            </div>
            <div className="bar">
              <div className="fill-80">
                <div className="labels">Python</div>
              </div>
            </div>
            <div className="bar">
              <div className="fill-80">
                <div className="labels">Node.JS</div>
              </div>
            </div>
            <div className="bar">
              <div className="fill-60">
                <div className="labels">Java</div>
              </div>
            </div>
            <div className="bar">
              <div className="fill-60">
                <div className="labels">C++</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
