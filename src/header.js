import logo from "./images/codegeekologo.png";
import vector from "./images/Vector.png";
import ellipse from "./images/Ellipse 1.png";
import point from "./images/point.png";
import like from "./images/like.png";
import { NavLink, Link } from "react-router-dom";

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
                    <Link to={'dashboard'}>
                     <img src={logo} className="logo.images px-5" />
                    </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link link " to={''} activeClassName={"active"} exact={true}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"videos"} activeClassName={"active"}>
                                My videos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to={"leaderboard"} activeClassName={"active"}>
                                Leaderboard
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <div className="search_boxxx w-100">
                            <i className="fa fa-search search_icon"></i>        
                            <input
                                type="search"
                                className=" search_box w-100"
                                placeholder="search for teachers,subjects videos,and more"></input>
                        </div>
                        <div className="alert mx-3" id = "notification_box">
                            <img src={point} className="point" />
                            <img src={vector} className="vector_image " />
                        </div>
                        <img src={ellipse} className="ellipse mx-2" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;