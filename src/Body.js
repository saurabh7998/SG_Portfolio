import "./app.css";
import MyPhoto from "./images/MyPhoto.png";
import DevImg from "./images/developer-workspace.png";
import FrontendImg from "./images/frontend.png";
import Frontend from "./images/frontendImg.png";
import BackendImg from "./images/backend.png";
import MusicHubImg from "./images/MusicHub-Preview.png";
import DungeonSlayerImg from "./images/dungeonSlayer.png";
import TuiterImg from "./images/TuiterPreview.png";
import CardComponent from "./Card";
import ProjectCard from "./ProjectCard";
import {
    BACKEND_TECH,
    DUNGEON_MONSTER_SLAYER, FRONTEND_TECH,
    MUSIC_HUB,
    TUITER_APP
} from "./common";

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
                        I like working on multiple tech stacks, and I love what
                        I do!
                    </p>
                </div>
                <div class="overflow-hidden" style={{maxheight: "30vh"}}>
                    <div class="container px-5">
                        <img
                            src={MyPhoto}
                            className="img-thumbnail img-fluid width-5 mt-5 rounded-circle"
                            alt="profile"
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                maxHeight: "25vh"
                            }}
                        />
                    </div>
                    <div class="overflow-hidden" style={{maxheight: "30vh"}}>
                        <div class="container px-5">
                            <img
                                src={DevImg}
                                className="img-fluid width-5 mt-5"
                                alt="profile"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    maxHeight: "45vh"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="about"
                class="bg-dark text-secondary px-4 py-5 text-center"
                style={{minHeight: "80vh"}}
            >
                <div class="py-5">
                    <h1 class="display-6 fw-bold text-white">
                        Hello there, I'm Saurabh, delighted to connect with you.
                    </h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="fs-5 mb-4">
                            Enthusiastic Software Developer with a solid
                            foundation in
                            computer science theory and a Master's degree from
                            Northeastern
                            University. Proficient in both frontend technologies
                            like React.js
                            and backend technologies like Node.js and MongoDB,
                            I'm passionate
                            about creating seamless digital experiences.
                            Equipped with
                            problem-solving prowess, I bring a comprehensive
                            approach to
                            crafting robust applications that thrive on both
                            ends of the
                            stack.
                        </p>
                    </div>
                </div>
            </div>
            <div
                id="skills"
                className="container"
                style={{maxWidth: "150vh", marginTop: "-20vh"}}
            >
                <div className="row">
                    <div className="d-grid grid-cols-2 col-md-6 col-12 m-0 p-0">
                        <CardComponent
                            img={BackendImg}
                            mainTitle="Backend Technologies"
                            heading1="Dev Tools I use"
                            text1={BACKEND_TECH.devTools}
                            heading2="Languages I speak"
                            skills={BACKEND_TECH.languages}
                        />
                    </div>
                    <div className="d-grid grid-cols-2 col-md-6 col-12 m-0 p-0">
                        <CardComponent
                            img={Frontend}
                            mainTitle="Frontend Technologies"
                            heading1="Dev Tools I use"
                            text1={FRONTEND_TECH.devTools}
                            heading2="Frameworks/Libraries"
                            skills={FRONTEND_TECH.libraries}
                        />
                    </div>
                    <div className="col-md-4 col-12 m-0 p-0">
                        {/*<CardComponent/>*/}
                    </div>
                </div>
            </div>
            <div id="projects" class="album py-5">
                <div class="container">
                    <div
                        className="col-lg-6 mx-auto text-center my-5">
                        <h1 className="pb-2 display-6 fw-bold text-body-emphasis">
                            My Projects
                        </h1>
                        <p className="lead mb-4">
                            Here are a few past projects which I have worked on!
                        </p>
                    </div>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col">
                            <ProjectCard
                                image={MusicHubImg}
                                title={MUSIC_HUB.title}
                                description={MUSIC_HUB.description}
                                githubLink={MUSIC_HUB.githubLink}
                            />
                        </div>
                        <div class="col">
                            <ProjectCard
                                image={TuiterImg}
                                title={TUITER_APP.title}
                                description={TUITER_APP.description}
                                githubLink={TUITER_APP.githubLink}
                            />
                        </div>
                        <div class="col">
                            <ProjectCard
                                image={DungeonSlayerImg}
                                title={DUNGEON_MONSTER_SLAYER.title}
                                description={DUNGEON_MONSTER_SLAYER.description}
                                githubLink={DUNGEON_MONSTER_SLAYER.githubLink}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
