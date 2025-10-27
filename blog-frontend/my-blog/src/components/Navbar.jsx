import {Link} from "react-router-dom";

export default  function Navbar(){
    return (
        <nav>
            <div>
                <div>
                    <span className="logo-top">Logo</span>
                </div>
                <ul className="navbar box-glow">
                    <li className="a">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="a">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="a">
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li className="a">
                        <Link to="/memories">Memories lane</Link>
                    </li>
                    <li className="a">
                        <Link to="/about">About me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}