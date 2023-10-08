import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                if(user){
                    alert('ok')
                }
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <div id="nav_bg">
            <div className="w-[1350px] mx-auto flex justify-between py-7">
                <div><Link to="/"><img className="w-[150px]" src="https://i.ibb.co/Cw1C2cw/pngwing-com.png" alt="" /></Link></div>
                <div className="flex gap-10 items-center">
                    <NavLink to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 font-bold underline" : "text-white"} style={{}}>HOME
                    </NavLink>
                    <NavLink to="/blog"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 font-bold underline" : "text-white"} style={{}}>BLOG
                    </NavLink>
                    <NavLink to="/contact"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 font-bold underline" : "text-white"} style={{}}>CONTACT
                    </NavLink>
                    <NavLink to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 font-bold underline" : "text-white"} style={{}}>LOGIN
                    </NavLink>
                    <NavLink to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 font-bold underline" : "text-white"} style={{}}>REGISTER
                    </NavLink>
                    {
                        user ? <>
                           <span className="text-white">{user.email}</span>
                           <button onClick={handleSignOut} className=" text-white rounded-md px-3 py-1 font-bold" style={{ backgroundColor: "#CE1446" }}>Sign Out</button>
                        </>
                        :
                         <Link to="/login"><button className=" text-white rounded-md px-3 py-1 font-bold" style={{ backgroundColor: "#CE1446" }}>Login</button></Link>
                    }
                    
                </div>
            </div>
        </div>
    )
}
export default NavBar;