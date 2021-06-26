import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import Logo from "../../images/rtt-logo.png";

const AdminSidebar = () => {
  let { url } = useRouteMatch();

  return (
    <div className='admin-sidebar'>
      <ul>
        <li id='logo'>
          <img src={Logo} alt='' />
        </li>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/add-blog?name=admin`}>
            Add Blog
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/blog-list?name=admin`}>
            Blog List
          </NavLink>
        </li>
        <li>
          <NavLink to={`${url}/add-admin?name=admin`}>
            Add admin
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
