import { FcExternal } from "react-icons/fc";
import logo from "../../assets/images/logo.png"
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="navbar max-w-screen-2xl mx-auto px-4 lg:px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="addContact">Add Contact</NavLink></li>
                        <li><NavLink to="allContacts">All Contact</NavLink></li>
                    </ul>
                </div>
                <Link to="/" className="text-xl flex items-center gap-2">
                    <img src={logo} alt="" className="h-16" />
                    <div className="flex flex-col justify-start">
                        <span className="text-2xl">Cellio</span> <span className="text-[12px] text-base-400 text-tertiary">Contact Management</span>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base">
                    <li><NavLink to="addContact" className="">Add Contact</NavLink></li>
                    <li><NavLink to="allContacts">All Contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login"> <button className="btn btn-sm bg-primary hover:bg-tertiary hover:text-white"><FcExternal className="rotate-90 text-3xl" />LOGIN</button></Link>
            </div>
        </div>
    );
};

export default Navbar;