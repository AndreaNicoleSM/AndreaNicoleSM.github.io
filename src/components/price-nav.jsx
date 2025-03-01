import React from "react";
import Github from "./icons/github";
import Bluesky from "./icons/bluesky";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const PriceNav = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className="navbar-alt">
        <div className="navbar-wrapper-alt">
          <div className="navbar-container-alt">
            <div className="navbar-section left">
              <nav className="navbar-menu alt-nav navbar-items">
                <Link className="navbar-title-link" to="/">
                  <h1>ANDRÉA MELO</h1>
                </Link>
              </nav>
            </div>
            <div className="navbar-section right">
              <nav className="navbar-menu alt-nav shown">
                <Link to="/overview">{t("nav_5")}</Link>
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
};

export default PriceNav;
