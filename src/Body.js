import "./app.css";
import MyPhoto from "./MyPhoto.png";
import DevImg from "./developer-workspace.png";
import CardComponent from "./Card";

function Body() {
  return (
    <div>
      <div class="px-4 pt-5 mt-5 text-center border-bottom">
        <h1 class="display-6 fw-bold text-body-emphasis">
          Code, Create, Innovate:
          <small className="text-body-secondary">
            {" "}
            Full Stack Developer on a Journey
          </small>
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            I like working on multiple tech stacks, and I love what I do!
          </p>
        </div>
        <div class="overflow-hidden" style={{ maxheight: "30vh" }}>
          <div class="container px-5">
            <img
              src={MyPhoto}
              className="img-thumbnail img-fluid width-5 mt-5 rounded-circle"
              alt="profile"
              style={{ maxWidth: "100%", height: "auto", maxHeight: "25vh" }}
            />
          </div>
          <div class="overflow-hidden" style={{ maxheight: "30vh" }}>
            <div class="container px-5">
              <img
                src={DevImg}
                className="img-fluid width-5 mt-5"
                alt="profile"
                style={{ maxWidth: "100%", height: "auto", maxHeight: "45vh" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-dark text-secondary px-4 py-5 text-center"
        style={{ minHeight: "80vh" }}
      >
        <div class="py-5">
          <h1 class="display-6 fw-bold text-white">
            Hello there, I'm Saurabh, delighted to connect with you.
          </h1>
          <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4">
              Enthusiastic Software Developer with a solid foundation in
              computer science theory and a Master's degree from Northeastern
              University. Proficient in both frontend technologies like React.js
              and backend technologies like Node.js and MongoDB, I'm passionate
              about creating seamless digital experiences. Equipped with
              problem-solving prowess, I bring a comprehensive approach to
              crafting robust applications that thrive on both ends of the
              stack.
            </p>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ maxWidth: "150vh", marginTop: "-20vh" }}
      >
        <div className="row">
          <div className="col-md-4 col-12 m-0 p-0">
            <CardComponent />
          </div>
          <div className="col-md-4 col-12 m-0 p-0">
            <CardComponent />
          </div>
          <div className="col-md-4 col-12 m-0 p-0">
            <CardComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
