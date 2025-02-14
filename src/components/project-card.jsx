export const ProjectCardProp = (props) => {
  const projects = props.projects || [];

  return (
    <div className="section-content-wrapper">
      <div className="side-line"></div>
      <div className="section-content">
        {projects.map((project) => (
          <div className="section-content" key={project.id}>
            <a href={project.link}>
              <h6 className="section-content-link">{project.title}</h6>
            </a>
            <p
              style={{
                color: "rgb(217, 214, 214",
                fontSize: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              {project.description}
            </p>
            <div className="tags">
              <div className="tag tech-tag">
                <p>HTML</p>
              </div>
              <div className="tag tech-tag">
                <p>CSS</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
