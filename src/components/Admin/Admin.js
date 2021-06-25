import React from "react";
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AddBlog from "./AddBlog";
import BlogsList from "./BlogsList";
import AddAdmin from "./AddAdmin";
import Home from "../Home/Home";

const Admin = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <AdminSidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path={`${path}/add-blog`}>
          <AddBlog />
        </Route>
        <Route path={`${path}/blog-list`}>
          <BlogsList />
        </Route>
        <Route path={`${path}/add-admin`}>
          <AddAdmin />
        </Route>
      </Switch>
    </div>
  );
};

export default Admin;
