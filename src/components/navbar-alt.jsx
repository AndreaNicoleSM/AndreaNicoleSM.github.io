import Github from "./icons/github";
import Bluesky from "./icons/bluesky";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

function NavbarAlt() {
  const { t } = useTranslation();

  return (
    <>
      <header className="navbar-alt">
        <div className="navbar-wrapper-alt">
          <div className="navbar-container-alt">
            <div className="navbar-section left">
              <nav className="navbar-menu alt-nav navbar-items">
                <HashLink smooth to="/#home">
                  {t("nav_1")}
                </HashLink>
                <HashLink smooth to="/#about">
                  {t("nav_2")}
                </HashLink>
                <HashLink smooth to="/#portfolio">
                  {t("nav_3")}
                </HashLink>
                <HashLink smooth to="/#contact">
                  {t("nav_4")}
                </HashLink>
              </nav>
            </div>
            <div className="navbar-section right">
              <nav className="navbar-menu alt-nav shown">
                <Link to="/overview" target="_blank">
                  {t("nav_5")}
                </Link>
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

export default NavbarAlt;
