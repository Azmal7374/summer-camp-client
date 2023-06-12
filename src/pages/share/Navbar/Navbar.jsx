import React, { useContext, useEffect, useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faUser,
  faMessage,
  faGear,
  faLock,
  faArrowRightFromBracket,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../../provider/AuthProvider";
import logo from '../../../assets/logo2.avif'
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {
        console.log(error.message);
      });
  };


  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className=" sticky top-0 z-30 ">
      <div className="navbar  ml-12 ">
        <img data-aos="fade-down" className="w-20 md:w-24 " src={logo} alt="" />
        <h2 className="w-full   text-xl md:text-3xl font-bold ml-2 ">
          Sports Academic
        </h2>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
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
              className="menu menu-compact dropdown-content mt-3 p-4 bg-base-100 rounded-md  w-52"
            >
              <p className="px-2 my-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </p>

              {user && (
                <p className="px-2 py-2">
                  <NavLink
                    to="/instructors"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Instructors
                  </NavLink>
                </p>
              )}

              {user && (
                <p className="px-2 py-2">
                  <NavLink
                    to="/classes"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Classes
                  </NavLink>
                </p>
              )}

              {user && (
                <p className="px-2 py-2">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Dashboard
                  </NavLink>
                </p>
              )}
              {!user?.email ? (
                <>
                  <p className="px-2 py-2">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Login
                    </NavLink>
                  </p>
                </>
              ) : (
                <p className="px-2 ">
                  <NavLink>
                    {" "}
                    <button
                    onClick={logOut}
                    className="bg-purple-500 hover:bg-purple-600  font-bold"
                  >
                      Sign Out
                    </button>
                  </NavLink>
                </p>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-24">
            <p className="mx-4 my-4">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </p>
            <p className="mx-4  my-4">
              {user && (
                <p className="mx-4 ">
                  <NavLink
                    to="/instructors"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Instructors
                  </NavLink>
                </p>
              )}
            </p>
            {user && (
              <p className="mx-4  my-4">
                <NavLink
                  to="/classes"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Classes
                </NavLink>
              </p>
            )}

            {user && (
              <p className="px-2 my-4">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Dashboard
                </NavLink>
              </p>
            )}

            {!user?.email ? (
              <>
                <p className="mx-4  my-4">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Login
                  </NavLink>
                </p>
              </>
            ) : (
              <p className="mx-4 ">
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  <button
                    onClick={logOut}
                    className="bg-purple-500 hover:bg-purple-600  font-bold"
                  >
                    Sign Out
                  </button>
                </NavLink>
              </p>
            )}
          </ul>

          <div className="">
          {/* Toggle button here */}
          <button className="btn btn-square ">
            <label className=" w-12 h-12">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
              />
              {/* light theme sun image */}
              <p  className="w-8 h-8 swap-on"><MdOutlineLightMode></MdOutlineLightMode></p>
             
              {/* dark theme moon image */}
             <p className="w-8 h-8 swap-off"> <MdDarkMode></MdDarkMode></p>
            </label>
          </button>
        </div>
        </div>
        <div className="navbar-end mr-12 lg:mr-20" data-aos="fade-down">
          {user && (
            <img
              className="h-20 w-20  rounded-full"
              title={user?.displayName}
              src={user ? user.photoURL : ""}
            />
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
