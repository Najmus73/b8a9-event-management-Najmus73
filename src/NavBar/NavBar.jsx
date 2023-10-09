import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import swal from 'sweetalert';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    

    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                if (user) {
                    swal("Good job!", "Successfully Sign Out", "success")
                    navigate('/login')
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
                            isPending ? "pending" : isActive ? "text-blue-400 border border-white p-1 px-2 font-bold" : "text-white"} style={{}}>HOME
                    </NavLink>

                    {
                        user && <>
                            <NavLink to="/blog"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-400 border border-white p-1 px-2 font-bold" : "text-white"} style={{}}>BLOG
                            </NavLink>
                            <NavLink to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-400 border border-white p-1 px-2 font-bold" : "text-white"} style={{}}>CONTACT
                            </NavLink>
                        </>
                    }

                   {
                    !user && <>
                          <NavLink to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-400 border border-white p-1 px-2 font-bold" : "text-white"} style={{}}>LOGIN
                    </NavLink>
                    <NavLink to="/register"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue-400 border border-white p-1 px-2 font-bold" : "text-white"} style={{}}>REGISTER
                    </NavLink>
                    </>
                   }
                   
                    {
                        user ? <>
                            <span className="text-white font-bold">{user.displayName}</span>
                            <div className="avatar">
                                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <button onClick={handleSignOut} className=" text-white rounded-md px-3 py-1 font-bold border border-white bg-red-600">Log Out</button>
                        </>
                            :
                            <Link to="/login"><button className=" text-white rounded-md px-3 py-1 font-bold bg-red-600">Login</button></Link>
                    }

                </div>
            </div>
        </div>
    )
}
export default NavBar;