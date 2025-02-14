import ProjectSection from "./project-section";
import { useTranslation } from "react-i18next";

function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="portfolio">
      <div className="header-wrapper flex-col">
        <h2>{t("section_portfolio")}</h2>
        <div className="underline"></div>
      </div>
      <div className="portfolio-content-wrapper">
        <ProjectSection />
      </div>
    </section>
  );
}

export default Portfolio;
