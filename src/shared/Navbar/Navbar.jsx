import { Link, NavLink } from "react-router-dom";
import navlogo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .then((errro) => {
        console.log(errro);
      });
  };

  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="" to="/contact">
          Contact
        </NavLink>
      </li>
      {user?.email ? (
        <>
          <li><NavLink className="" to="/bookingCard">My Bookings</NavLink></li>
          <li><button
              onClick={handleLogOut}
              className="btn bg-[#ff2200] text-center">Log Out
            </button>
          </li>
        </>
      ) : (
        <li>
          <NavLink className="" to="/login">
            Login
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-white sticky inset-0 z-10  w-full max-w-full rounded-none border  bg-opacity-30 py-2 px-4 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-2 lg:py-2">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <i className="fa-solid fa-bars text-[25px]"></i>
            </label>
            <ul
              tabIndex={0}
              className="menu text-xl dropdown-content mt-3 z-[1] p-2 shadow-lg bg-[#615e5e] rounded-box w-52 gap-5 border-2 border-[#ff2200]"
            >
              {navLink}
            </ul>
          </div>
          <Link to="/">
            <img className="w-16" src={navlogo} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex items-center justify-center">
          <ul className="menu text-xl menu-horizontal px-1 gap-5">{navLink}</ul>
        </div>

        <div className="navbar-end">
          <div className="flex gap-5">
            <i className="fa-solid fa-bag-shopping text-[25px]  cursor-pointer"></i>
            <i className="fa-solid fa-magnifying-glass text-[25px] mr-3 cursor-pointer"></i>
          </div>
          <button className="btn btn-outline text-black text-xl">
            AppointMent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
