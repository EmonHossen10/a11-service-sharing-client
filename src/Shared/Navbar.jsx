import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-[#FFDC39] rounded-none font-bold  "
              : " "
          }
        >
          Home{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " bg-[#FFDC39] rounded-none font-bold  "
              : ""
          }
        >
          Services
        </NavLink>
      </li>
      {/* dropdown */}
{/*  
      <div className="navbar-center   hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      <li tabIndex={0}>
        <details>
          <summary   >Parent</summary>
          <ul className="p-2 ">
            <li className="w-full"><a>My Services</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      
    </ul>
  </div>
  */}
  <details className="dropdown">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

    </>
  );
  return (
    <div className="navbar bg-base-100  h-24 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <Link to="/">
          <img
            className=" lg:w-[300px] w-[100px]  "
            src="https://i.imgur.com/YsLnCLl.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1  ">{nav}</ul>
      </div>
      <div className="navbar-end ">
        <Link to="/login">
          <button className="btn btn-ghost ">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
