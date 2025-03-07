import { Link } from "react-router";
import { Trans, useTranslation } from "react-i18next";

function ProjectSection() {
  const { t } = useTranslation();

  return (
    <>
      <div className="tab-panel-content">
        <div className="section-content-wrapper project-card">
          <div className="side-line expanded"></div>
          <div className="section-content card-content">
            <div className="section-content">
              <a href="https://eleonoir.art" target="_blank">
                <h6 className="section-content-link">eleonoir.art</h6>
              </a>
              <p
                style={{
                  color: "rgb(217, 214, 214",
                  fontSize: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <Trans
                  i18nKey="project_txt_1"
                  components={{
                    1: (
                      <a
                        href="https://bsky.app/profile/arteleonoir.bsky.social"
                        target="_blank"
                      ></a>
                    ),
                  }}
                />
                <br />
                <br />
                <Link to="/projects/arteleonoir">{t("learn_more")}</Link>
              </p>
              <div className="tags alt-tags">
                <div className="tag tech-tag">
                  <p>HTML</p>
                </div>
                <div className="tag tech-tag">
                  <p>CSS</p>
                </div>
                <div className="tag tech-tag">
                  <p>Javascript</p>
                </div>
                <div className="tag tech-tag">
                  <p>Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-content-wrapper project-card">
          <div className="side-line expanded"></div>
          <div className="section-content card-content">
            <div className="section-content portfolio-section-content">
              <div className="card-text-content">
                <Link to="/overview" target="_blank">
                  <h6 className="section-content-link">
                    {t("project_title_2")}
                  </h6>
                </Link>
                <p
                  style={{
                    color: "rgb(217, 214, 214",
                    fontSize: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {t("project_txt_2")}
                </p>
              </div>

              <div className="tags alt-tags">
                <div className="tag tech-tag">
                  <p>React App</p>
                </div>
                <div className="tag tech-tag">
                  <p>Javascript</p>
                </div>
                <div className="tag tech-tag">
                  <p>CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
