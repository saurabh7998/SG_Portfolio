import { Github, Linkedin, Instagram } from "react-bootstrap-icons";

function Footer() {
  return (
    <div id="contact" class="bg-dark text-white">
      <footer class="py-3 mt-4">
        <ul class="nav justify-content-center pb-3 mb-3">
          <li class="nav-item">
            <a href="https://github.com/saurabh7998" class="nav-link px-2 ">
              <Github size={25} color="white" />
            </a>
          </li>
          <li class="nav-item">
            <a href="https://www.linkedin.com/in/saurabhgade/" class="nav-link px-2 ">
              <Linkedin size={25} />
            </a>
          </li>
          <li class="nav-item">
            <a href="https://www.instagram.com/saurabh7998/" class="nav-link px-2 ">
              <Instagram size={25} color="red" />
            </a>
          </li>
        </ul>
        <p class="text-center">&copy; 2023 Saurabh Gade</p>
      </footer>
    </div>
  );
}

export default Footer;
