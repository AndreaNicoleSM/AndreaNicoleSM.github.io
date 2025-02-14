import { HashLink } from "react-router-hash-link";
import { useTranslation, Trans } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <>
      <div id="home">
        <div id="hero" className="--hero_container container">
          <div className="hero-container">
            <h1 id="hero-txt">
              <Trans
                i18nKey="welcome_message"
                components={{
                  2: (
                    <span
                      style={{
                        color: "rgb(208, 53, 109)",
                      }}
                    ></span>
                  ),
                }}
              />
            </h1>
            <HashLink
              smooth
              to="#about"
              id="hero-btn"
              className="hero-btn btn-bg flex-row"
            >
              <p className="hero-btn-txt">{t("hero_btn_txt")}</p>
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
