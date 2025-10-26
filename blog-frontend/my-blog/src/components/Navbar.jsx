import {Link} from "react-router-dom";

export default  function Navbar(){
    return (
        <nav className="bg-#0a0a1a border-b-2 border-red-500 shadow-0_0_10px_#ff003c">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between box-glow">
                Logo
                <div className="flex items-center gap-2">
                    <span className="text-glow">FLUFFY</span>
                    <span className="text-glow">1.0</span>
                </div>
                <ol>
                    <span className="m-10 p-10 grid grid-rows-4 gap-4 text-glow">
                        <Link to="/" className="text-2xl font-bold text-blue-600 p-20">My Blog</Link>
                    </span>
                    <span className="m-10 p-10 grid grid-rows-4 gap-4 text-glow">
                        <Link to="/" className="bg-blue-100 p-20">Home</Link>
                    </span>
                    <span className="m-10 p-10 grid grid-rows-4 gap-4 text-glow">
                        <Link to="/create" className="bg-blue-100 p-20">New Post</Link>
                    </span>
                    <span className="m-10 p-10 grid grid-rows-4 gap-4 text-glow">
                        <Link className="bg-blue-300 p-20" to="/about">About me</Link>
                    </span>
                </ol>
            </div>
        </nav>
    )
}