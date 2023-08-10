import "./app.css";
import MyPhoto from './MyPhoto.png';
import DevImg from './developer-workspace.png';

function Body() {
    return (
        <div className="container mt-5">
            <div className="row">
                <h1 className="text-center main-text">
                    Code, Create, Innovate: 
                    <small class="text-body-secondary"> Full Stack Developer on a Journey</small>
                </h1>
                <h4 className="text-center main-text mt-4">I like working on multiple tech stacks, and I love what I do!</h4>
            </div>
            <div className="row">
                <div class="text-center">
                    <img 
                        src={MyPhoto} 
                        class="img-thumbnail img-fluid width-5 mt-5 rounded-circle" 
                        alt="profile"
                        style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px' }}
                    />
                </div>
            </div>
            <div className="row">
                <div class="text-center">
                    <img 
                        src={DevImg} 
                        class="img-fluid width-5 mt-5" 
                        alt="profile"
                        style={{ maxWidth: '65%', height: 'auto', maxHeight: '500px' }}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 offset-md-2 text-center mt-5">
                    <p className="lead">
                        Hello there, I'm Saurabh, delighted to connect with you.
                    </p>
                    <p className="lead">
                        Enthusiastic Software Developer with a solid foundation in computer science theory and a Master's degree 
                        from Northeastern University. Proficient in both frontend technologies like React.js and backend technologies 
                        like Node.js and MongoDB, I'm passionate about creating seamless digital experiences. 
                        Equipped with problem-solving prowess, I bring a comprehensive approach to crafting robust applications that 
                        thrive on both ends of the stack.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Body;