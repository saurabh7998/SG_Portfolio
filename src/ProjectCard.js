import { Github } from "react-bootstrap-icons";
import "./app.css";

function ProjectCard({ image, title, description, githubLink }) {
  return (
    <div class="card shadow-sm position-relative" style={{minHeight: "70vh"}}>
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <image
          href={image}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>

      <div class="card-body">
        <h5>{title}</h5>
        <p class="card-text">{description}</p>
        <div class="position-absolute bottom-0 start-0 p-3 d-flex justify-content-between align-items-center">
          <a
            type="button"
            class="btn btn-outline-success d-flex align-items-center"
            href={githubLink}
          >
            <Github className="me-2" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
