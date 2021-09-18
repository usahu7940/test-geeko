import logo from "./images/codegeekologo.png";
import vector from "./images/Vector.png";
import ellipse from "./images/Ellipse 1.png";
import point from "./images/point.png";
import like from "./images/like.png";

function Header() {
    return (

        <header className="main_header">
            <nav className="navbar navbar-expand-lg main-nav navbar-light ">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <img src={logo} className="logo.images px-5" />
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link link " href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                My videos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                Leaderboard
                            </a>
                        </li>
                    </ul>
                    {/* <div className = "searching_box"> */}
                    <div>
                        <i className="fa fa-search"></i>        
                        <input
                            type="search"
                            className=" search_box mx-5"
                            placeholder="search for teachers,subjects videos,and more"></input>
                    </div>
                    {/* </div> */}
                    <div className="alert  mx-3">
                        {" "}
                        <img src={point} className="point" />
                        <img src={vector} className="vector_image " />
                    </div>
                    <img src={ellipse} className="ellipse mx-2" />
                </div>
            </nav>
        </header>
    )
}

export default Header;