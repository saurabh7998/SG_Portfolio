function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark pb-4 sticky-top"
            aria-label="Tenth navbar example">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample08"
                        aria-controls="navbarsExample08"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-md-center"
                    id="navbarsExample08">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link"
                               aria-current="page"
                               href="#about"
                            >About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
