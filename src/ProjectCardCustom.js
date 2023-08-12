import devImg from "./images/developer-workspace.png";
import { Github } from "react-bootstrap-icons";
import MusicHubImg from "./images/MusicHub-Preview.png";
import music from "./images/musicHub1.png";

function ProjectCardCustom({ title, link, image }) {
  return (
    <div
      class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
      style={{
        backgroundImage: `url(${MusicHubImg})`,
        backgroundSize: "100%", // Adjust the image size
        backgroundPosition: "center center", // Center the image
        filter: "brightness(50%)",
      }}
    >
      <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
        <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-warning">
          {title}
        </h3>
        <ul class="d-flex list-unstyled mt-auto">
          <li class="me-auto">
            <button
              type="button"
              class="btn btn-outline-success d-flex align-items-center"
              href={link}
            >
              <Github className="me-2" /> GitHub
            </button>
          </li>
          <li class="d-flex align-items-center me-3">
            <svg class="bi me-2" width="1em" height="1em">
              {/* <use xlink:href="#geo-fill" /> */}
            </svg>
            <small>Earth</small>
          </li>
          <li class="d-flex align-items-center">
            <svg class="bi me-2" width="1em" height="1em">
              {/* <use xlink:href="#calendar3" /> */}
            </svg>
            <small>3d</small>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCardCustom;
