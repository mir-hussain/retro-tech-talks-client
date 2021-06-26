import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const AdminSidebar = () => {
  let { url } = useRouteMatch();

  return (
    <div className='admin-sidebar'>
      <ul>
        <li id='logo'>Retro Tech Talks</li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to={`${url}/add-blog?name=admin`}>
            Add Blog
          </Link>
        </li>
        <li>
          <Link to={`${url}/blog-list?name=admin`}>
            Blog List
          </Link>
        </li>
        <li>
          <Link to={`${url}/add-admin?name=admin`}>
            Make admin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
