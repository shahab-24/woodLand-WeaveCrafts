import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import dark from '../../public/dark.png'
import light from '../../public/light.png'


const Headers = ({ setDarkMode, darkMode }) => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

    const navlinks = <>
     <li><NavLink to='/'>Home</NavLink></li>
     
     <li><NavLink to='/about'>About</NavLink></li>
     <li><NavLink to='/allcrafts'>All crafts items</NavLink></li>
    
     <li><NavLink to='/gallery'>Galleries</NavLink></li>
     <li><NavLink to='/subcategory'>All Categories</NavLink></li>
     <li><NavLink to='/category'>Category cards</NavLink></li>
        
        {user && <>
          <li><NavLink to='/addcrafts'>Add items</NavLink></li>
     <li><NavLink to='/myCard'>My Craft list</NavLink></li>
        </>

        }
      
    </>

    const handleLogOut = () => {
      logOut()
      .then(result => {
        if (result.user) Swal.fire({
          title: 'success!',
          text: 'You Have logged out successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        console.log(result.user);
        navigate('/login')
      })
    .catch(error => {
      console.log(error.message);
    })
    }

  return (
    <div className="mx-auto shadow-2xl mt-4">
       <div className="navbar bg-gray-400 rounded-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-100 rounded-box w-52">
       {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold text-orange-400">WoodLandCrafts</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  <div className=" w-[50px]">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className=" p-1 mr-3 flex items-center"
            >
              <img
                className="md:w-full   w-10 object-cover"
                src={darkMode ? light : dark}
                alt=""
              />
            </button>
          </div>
          {user ? (
            <>
              <span className="text-sm" title={user.displayName}>{user.photoURL && <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full" />} {user.displayName}</span>
              <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
            </>
          ) : (
            <>
              <Link to='/login'>
                <button className="btn btn-sm">Sign in</button>
              </Link>
              <Link to='/register'>
                <button className="btn btn-sm">Register</button>
              </Link>
            </>
          )}
        </div>
</div>
    </div>
  );
};

export default Headers;