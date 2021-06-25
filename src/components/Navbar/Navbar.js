import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const { currentUser, signOut } = useAuth();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  const queryName = query.get("name");
  let hide = { display: "block" };
  if (queryName === "admin") {
    hide = { display: "none" };
  }

  return (
    <nav style={hide}>
      <div className='nav-container'>
        <NavLink exact to='/' className='nav-logo'>
          Retro Tech Talks
        </NavLink>

        <ul
          className={click ? "nav-menu active" : "nav-menu"}
        >
          <li className='nav-item'>
            <NavLink
              exact
              to='/'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/admin/add-blog?name=admin'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}
            >
              Admin
            </NavLink>
          </li>
          <li className='nav-item'>
            {currentUser ? (
              <button onClick={signOut}>Log out</button>
            ) : (
              <NavLink
                exact
                to='/login'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Log in
              </NavLink>
            )}
          </li>
        </ul>
        <div className='nav-icon' onClick={handleClick}>
          <FontAwesomeIcon
            icon={click ? faTimes : faBars}
          />
        </div>
      </div>
      <hr className='bottom-dashed' />
    </nav>
  );
};

export default Navbar;
